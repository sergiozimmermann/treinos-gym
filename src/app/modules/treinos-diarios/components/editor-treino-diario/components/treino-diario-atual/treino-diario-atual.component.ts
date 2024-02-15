import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-treino-diario-atual',
  templateUrl: './treino-diario-atual.component.html',
  styleUrls: ['./treino-diario-atual.component.scss']
})
export class TreinoDiarioAtualComponent implements OnInit {

  @Input() treinoAtual: any;

  @Output() salvarTreino = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
