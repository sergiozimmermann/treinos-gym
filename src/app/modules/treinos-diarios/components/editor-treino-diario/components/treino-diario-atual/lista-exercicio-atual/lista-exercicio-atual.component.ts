import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { TreinosDiariosService } from '../../../../../services/treinos-diarios.service';
import Utils from '../../../../../../../Utils/Utils';
import { TreinosPresetService } from '../../../../../../treinos-preset/services/treinos-preset.service';
import { ExercicioTreinoAtual } from '../../../../../models/ExercicioTreinoAtual';
import { CardExercicioAtualComponent } from './card-exercicio-atual/card-exercicio-atual.component';

@Component({
  selector: 'app-lista-exercicio-atual',
  templateUrl: './lista-exercicio-atual.component.html',
  styleUrls: ['./lista-exercicio-atual.component.scss']
})
export class ListaExercicioAtualComponent implements OnInit {

  @ViewChildren('CardExercicioAtual') CardsExercicioAtual: any;

  exerciciosTreino: ExercicioTreinoAtual[] = [];

  _treinoAtual!: any;
  get treinoAtual(): any {
    return this._treinoAtual;
  }
  @Input() set treinoAtual(treinoAtual: any) {
    this._treinoAtual = treinoAtual;
    if (treinoAtual && treinoAtual.id && treinoAtual.idTreinoPreset) {
      this.getExerciciosTreino(treinoAtual)
    }
  }

  @Output() salvarTreino = new EventEmitter();

  constructor(private treinoService: TreinosDiariosService
    , private presetService: TreinosPresetService) { }

  ngOnInit() {
  }

  getExerciciosTreino(treinoAtual: any) {
    this.presetService.getExerciciosPreset(treinoAtual.idTreinoPreset).subscribe(exerciciosPreset => {
      this.treinoService.getExerciciosTreino(treinoAtual.id).subscribe(res => {
        const exercicios = Utils.mapResFirebase(res);
        const exsPreset = Utils.mapResFirebase(exerciciosPreset);
        exsPreset.forEach((exPreset: any) => {
          const exercicio = exercicios.find(p => p.idExercicioPreset === exPreset.id);
          const exercicioTreino = new ExercicioTreinoAtual();
          exercicioTreino.id = exercicio.id;
          exercicioTreino.idTreino = exercicio.idTreino;
          exercicioTreino.idExercicioPreset = exPreset.id;
          exercicioTreino.qtdRep = exercicio.qtdRep;
          exercicioTreino.pesoKg = exercicio.pesoKg;
          exercicioTreino.qtdSerie = exPreset.qtdSerie;
          exercicioTreino.nmExercicio = exPreset.nmExercicio;
          exercicioTreino.obsExercicio = exPreset.obsExercicio;
          exercicioTreino.minMaxRep = exPreset.minRep + '-' + exPreset.maxRep;
          this.exerciciosTreino.push(exercicioTreino);
        });
      });
    });
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
