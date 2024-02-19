import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExercicioTreinoAtual } from '../../../../../../models/ExercicioTreinoAtual';

@Component({
  selector: 'app-card-exercicio-atual',
  templateUrl: './card-exercicio-atual.component.html',
  styleUrls: ['./card-exercicio-atual.component.scss']
})
export class CardExercicioAtualComponent implements OnInit {

  cardChange: boolean = false;
  placeholderExercicios?: ExercicioTreinoAtual;

  _exerciciosUltimoTreino!: ExercicioTreinoAtual[];
  get exerciciosUltimoTreino(): ExercicioTreinoAtual[] {
    return this._exerciciosUltimoTreino;
  }
  @Input() set exerciciosUltimoTreino(exerciciosUltimoTreino: ExercicioTreinoAtual[]) {
    this._exerciciosUltimoTreino = exerciciosUltimoTreino;
  }

  _exercicio!: ExercicioTreinoAtual;
  get exercicio(): ExercicioTreinoAtual {
    return this._exercicio;
  }
  @Input() set exercicio(exercicio: ExercicioTreinoAtual) {
    this._exercicio = exercicio;
    if (exercicio && this.exerciciosUltimoTreino && this.exerciciosUltimoTreino.length > 0) {
      this.placeholderExercicios = this.exerciciosUltimoTreino.find(ex => ex.idExercicioPreset === exercicio.idExercicioPreset);
    }
  }
  @Output() exercicioChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getRange(value: number): number[] {
    return Array.from({ length: value }, (_, index) => index + 1);
  }

  onChangeInputs() {
    this.cardChange = true;
  }

}
