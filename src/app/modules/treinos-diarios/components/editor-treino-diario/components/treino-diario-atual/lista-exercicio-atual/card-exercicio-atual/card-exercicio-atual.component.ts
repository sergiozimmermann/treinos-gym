import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExercicioTreinoAtual } from '../../../../../../models/ExercicioTreinoAtual';

@Component({
  selector: 'app-card-exercicio-atual',
  templateUrl: './card-exercicio-atual.component.html',
  styleUrls: ['./card-exercicio-atual.component.scss']
})
export class CardExercicioAtualComponent implements OnInit {

  cardChange: boolean = false;

  @Input() exercicio!: ExercicioTreinoAtual;
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
