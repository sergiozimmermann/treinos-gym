import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ListaExercicioAtualComponent } from './lista-exercicio-atual/lista-exercicio-atual.component';

@Component({
  selector: 'app-treino-diario-atual',
  templateUrl: './treino-diario-atual.component.html',
  styleUrls: ['./treino-diario-atual.component.scss']
})
export class TreinoDiarioAtualComponent implements OnInit {

  @ViewChild('ListaExercicioAtual') ListaExercicioAtual!: ListaExercicioAtualComponent;

  @Input() treinoAtual: any;

  @Output() salvarTreino = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
