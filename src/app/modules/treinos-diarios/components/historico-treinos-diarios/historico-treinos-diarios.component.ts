import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historico-treinos-diarios',
  templateUrl: './historico-treinos-diarios.component.html',
  styleUrls: ['./historico-treinos-diarios.component.scss']
})
export class HistoricoTreinosDiariosComponent implements OnInit {

  @Output() adicionarTreino = new EventEmitter();
  @Output() onSelecionarTreino = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
