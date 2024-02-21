import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { TreinosDiariosService } from '../../../../../services/treinos-diarios.service';
import Utils from '../../../../../../../Utils/Utils';
import { TreinosPresetService } from '../../../../../../treinos-preset/services/treinos-preset.service';
import { ExercicioTreinoAtual } from '../../../../../models/ExercicioTreinoAtual';
import { CardExercicioAtualComponent } from './card-exercicio-atual/card-exercicio-atual.component';
import { TreinoAtual } from '../../../../../models/TreinoAtual';

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
        this.exerciciosUltimoTreino = Utils.mapResFirebase(treinoAnterior);
      }
      this.presetService.getExerciciosPreset(treinoAtual.idTreinoPreset).subscribe(resPreset => {
        const exerciciosPreset = Utils.mapResFirebase(resPreset);
        if (treinoAtual.id) {
          this.treinoService.getExerciciosTreino(treinoAtual.id).subscribe(resDiario => {
            const exerciciosDiarios = Utils.mapResFirebase(resDiario);
            this.exerciciosTreino = exerciciosPreset.map((exPreset: any) => {
              const exercicio = exerciciosDiarios.find(ex => ex.idExercicioPreset === exPreset.id);
              const exercicioTreino = new ExercicioTreinoAtual();
              exercicioTreino.id = exercicio.id;
              exercicioTreino.idTreino = exercicio.idTreino;
              exercicioTreino.qtdRep = exercicio.qtdRep;
              exercicioTreino.pesoKg = exercicio.pesoKg;
              exercicioTreino.idExercicioPreset = exPreset.id;
              exercicioTreino.qtdSerie = exPreset.qtdSerie;
              exercicioTreino.nmExercicio = exPreset.nmExercicio;
              exercicioTreino.obsExercicio = exPreset.obsExercicio;
              exercicioTreino.minMaxRep = exPreset.minRep + '-' + exPreset.maxRep;
              return exercicioTreino;
            });
          });
        }
        else {
          this.exerciciosTreino = exerciciosPreset.map((exPreset: any) => {
            const exercicioTreino = new ExercicioTreinoAtual();
            exercicioTreino.idExercicioPreset = exPreset.id;
            exercicioTreino.qtdSerie = exPreset.qtdSerie;
            exercicioTreino.nmExercicio = exPreset.nmExercicio;
            exercicioTreino.obsExercicio = exPreset.obsExercicio;
            exercicioTreino.minMaxRep = exPreset.minRep + '-' + exPreset.maxRep;
            return exercicioTreino;
          });
        }
      });
    });
  }

  addCadaExercicio(exercicio: any, idTreino: string) {
    return new Promise<void>((resolve) => {
      let exTreino = {
        idTreino: idTreino,
        idExercicioPreset: exercicio.idExercicioPreset,
        pesoKg: exercicio.pesoKg,
        qtdRep: exercicio.qtdRep
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
      let exTreino = {
        id: exercicio.id,
        pesoKg: exercicio.pesoKg,
        qtdRep: exercicio.qtdRep
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
