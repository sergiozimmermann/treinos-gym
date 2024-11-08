import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-treino-diario',
  templateUrl: './card-treino-diario.component.html',
  styleUrls: ['./card-treino-diario.component.scss']
})
export class CardTreinoDiarioComponent implements OnInit {

  @Input() treino: any;

  @Output() deletarTreino = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
