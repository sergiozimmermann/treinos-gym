import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { TreinosDiariosService } from '../../../../../services/treinos-diarios.service';
import Utils from '../../../../../../../Utils/Utils';
import { TreinosPresetService } from '../../../../../../treinos-preset/services/treinos-preset.service';
import { ExercicioTreinoAtual } from '../../../../../models/ExercicioTreinoAtual';
import { CardExercicioAtualComponent } from './card-exercicio-atual/card-exercicio-atual.component';
import { TreinoAtual } from '../../../../../models/TreinoAtual';
import { TipoExercicio } from '../../../../../../../Utils/Enum/TipoExercicio.enum';

@Component({
  selector: 'app-lista-exercicio-atual',
  templateUrl: './lista-exercicio-atual.component.html',
  styleUrls: ['./lista-exercicio-atual.component.scss']
})
export class ListaExercicioAtualComponent implements OnInit {

  @ViewChildren('CardExercicioAtual') CardsExercicioAtual: any;

  exerciciosTreino: ExercicioTreinoAtual[] = [];

  exerciciosUltimoTreino: any[] = [];

  _treinoAtual!: TreinoAtual;
  get treinoAtual(): TreinoAtual {
    return this._treinoAtual;
  }
  @Input() set treinoAtual(treinoAtual: TreinoAtual) {
    this._treinoAtual = treinoAtual;
    if (treinoAtual && treinoAtual.idTreinoPreset) {
      this.getExerciciosTreino(treinoAtual)
    }
  }

  @Output() salvarTreino = new EventEmitter();

  constructor(private treinoService: TreinosDiariosService
    , private presetService: TreinosPresetService) { }

  ngOnInit() {
  }

  getExerciciosTreino(treinoAtual: TreinoAtual) {
    this.treinoService.getExerciciosUltimoTreino(treinoAtual.idTreinoPreset).then(treinoAnterior => {
      if (treinoAnterior) {
        // Se tiver treino anterior, ele substitui os placeholders pelos dados do treino anterior
        this.exerciciosUltimoTreino = Utils.mapResFirebase(treinoAnterior);
      }
      this.presetService.getExerciciosPreset(treinoAtual.idTreinoPreset).subscribe(resPreset => {
        const exerciciosPreset = Utils.mapResFirebase(resPreset);

        if (treinoAtual.id) {
          this.treinoService.getExerciciosTreino(treinoAtual.id).subscribe(resDiario => {
            this.exerciciosTreino = Utils.mapResFirebase(resDiario);
            // this.exerciciosTreino = exerciciosPreset.map(exPreset => {
            //   const exercicio = exercicios.find(ex => ex.idExercicioPreset === exPreset.id);
            //   exercicio.indexExPreset = exPreset.indexExPreset;
            //   return exercicio;
            // });
            // const exercicioTreino = new ExercicioTreinoAtual();
          });
        }
        else {
          // Se estiver adicionando um treino novo, somente adiciona os dados do preset
          this.exerciciosTreino = exerciciosPreset.map((exPreset: any) => {
            const exercicioTreino = new ExercicioTreinoAtual();
            exercicioTreino.idExercicioPreset = exPreset.id;
            exercicioTreino.qtdSerie = exPreset.qtdSerie;
            exercicioTreino.nmExercicio = exPreset.nmExercicio;
            exercicioTreino.obsExercicio = exPreset.obsExercicio;
            exercicioTreino.minMaxRep = exPreset.minRep + '-' + exPreset.maxRep;
            exercicioTreino.tpExercicio = exPreset.tpExercicio ?? 1;

            if (exPreset.tpExercicio === TipoExercicio.BISET) {
              exercicioTreino.nmSet1 = exPreset.nmSet1;
              exercicioTreino.nmSet2 = exPreset.nmSet2;
              exercicioTreino.minMaxRepBiset1 = exPreset.minRepBiset1 + '-' + exPreset.maxRepBiset1;
              exercicioTreino.minMaxRepBiset2 = exPreset.minRepBiset2 + '-' + exPreset.maxRepBiset2;
            }
            return exercicioTreino;
          });
        }
      });
    });
  }

  addCadaExercicio(exercicio: any, idTreino: string) {
    return new Promise<void>((resolve) => {
      let exTreino: any = {
        idTreino: idTreino,
        idExercicioPreset: exercicio.idExercicioPreset,
        pesoKg: exercicio.pesoKg,
        qtdRep: exercicio.qtdRep,
        qtdSerie: exercicio.qtdSerie,
        nmExercicio: exercicio.nmExercicio,
        obsExercicio: exercicio.obsExercicio,
        minMaxRep: exercicio.minMaxRep,
        tpExercicio: exercicio.tpExercicio ?? 1,
        indexExPreset: exercicio.indexExPreset
      }

      if (exercicio.tpExercicio === TipoExercicio.BISET) {
        exTreino.nmSet1 = exercicio.nmSet1;
        exTreino.nmSet2 = exercicio.nmSet2;
        exTreino.pesoKgBiset1 = exercicio.pesoKgBiset1;
        exTreino.pesoKgBiset2 = exercicio.pesoKgBiset2;
        exTreino.qtdRepBiset1 = exercicio.qtdRepBiset1;
        exTreino.qtdRepBiset2 = exercicio.qtdRepBiset2;
        exTreino.minMaxRepBiset1 = exercicio.minMaxRepBiset1;
        exTreino.minMaxRepBiset2 = exercicio.minMaxRepBiset2;
      }
      this.treinoService.addExercicioDiario(exTreino).then(() => {
        resolve();
      });
    });
  }

  addExerciciosDiarios(idTreino: string) {
    const exerciciosDiarios = this.CardsExercicioAtual._results.map((component: CardExercicioAtualComponent) => component.exercicio);
    const promises = exerciciosDiarios.map((exercicio: any) => this.addCadaExercicio(exercicio, idTreino));
    // Usando Promise.all para aguardar a conclusão de todas as Promises
    return Promise.all(promises);
  }

  atualizaCadaExercicio(exercicio: any) {
    return new Promise<void>((resolve) => {
      let exTreino: any = {
        id: exercicio.id,
        pesoKg: exercicio.pesoKg,
        qtdRep: exercicio.qtdRep,
        idTreino: exercicio.idTreino,
        idExercicioPreset: exercicio.idExercicioPreset,
        qtdSerie: exercicio.qtdSerie,
        nmExercicio: exercicio.nmExercicio,
        obsExercicio: exercicio.obsExercicio,
        minMaxRep: exercicio.minMaxRep,
        tpExercicio: exercicio.tpExercicio ?? 1,
        indexExPreset: exercicio.indexExPreset
      }

      if (exercicio.tpExercicio === TipoExercicio.BISET) {
        exTreino.nmSet1 = exercicio.nmSet1;
        exTreino.nmSet2 = exercicio.nmSet2;
        exTreino.pesoKgBiset1 = exercicio.pesoKgBiset1;
        exTreino.pesoKgBiset2 = exercicio.pesoKgBiset2;
        exTreino.qtdRepBiset1 = exercicio.qtdRepBiset1;
        exTreino.qtdRepBiset2 = exercicio.qtdRepBiset2;
        exTreino.minMaxRepBiset1 = exercicio.minMaxRepBiset1;
        exTreino.minMaxRepBiset2 = exercicio.minMaxRepBiset2;
      }
      this.treinoService.atualizarExercicioDiario(exTreino).then(() => {
        resolve();
      });
    });
  }

  atualizarExerciciosDiarios(): Promise<any> {
    const cardsComChange = this.CardsExercicioAtual._results.filter((component: CardExercicioAtualComponent) => component.cardChange === true);
    const exerciciosDiarios = cardsComChange.map((component: CardExercicioAtualComponent) => component.exercicio);
    const promises = exerciciosDiarios.map((exercicio: any) => this.atualizaCadaExercicio(exercicio));
    // Usando Promise.all para aguardar a conclusão de todas as Promises
    return Promise.all(promises);
  }

}
