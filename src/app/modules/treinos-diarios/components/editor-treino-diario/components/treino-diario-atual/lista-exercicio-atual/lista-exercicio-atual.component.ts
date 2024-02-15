import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreinosDiariosService } from '../../../../../services/treinos-diarios.service';
import Utils from '../../../../../../../Utils/Utils';
import { TreinosPresetService } from '../../../../../../treinos-preset/services/treinos-preset.service';
import { ExercicioTreinoAtual } from '../../../../../models/ExercicioTreinoAtual';

@Component({
  selector: 'app-lista-exercicio-atual',
  templateUrl: './lista-exercicio-atual.component.html',
  styleUrls: ['./lista-exercicio-atual.component.scss']
})
export class ListaExercicioAtualComponent implements OnInit {

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

  constructor(private diarioService: TreinosDiariosService
    , private presetService: TreinosPresetService) { }

  ngOnInit() {
  }

  getExerciciosTreino(treinoAtual: any) {
    this.presetService.getExerciciosPreset(treinoAtual.idTreinoPreset).subscribe(exerciciosPreset => {
      this.diarioService.getExerciciosTreino(treinoAtual.id).subscribe(res => {
        const exercicios = Utils.mapResFirebase(res);
        exerciciosPreset = Utils.mapResFirebase(exerciciosPreset);
        exerciciosPreset.forEach((exPreset: any) => {
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

}
