import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiltroTreinos } from '../../../../models/FiltroTreinos';

@Component({
  selector: 'app-filtro-treinos-diarios',
  templateUrl: './filtro-treinos-diarios.component.html',
  styleUrls: ['./filtro-treinos-diarios.component.scss']
})
export class FiltroTreinosDiariosComponent implements OnInit {

  filtro: FiltroTreinos = new FiltroTreinos();

  @Output() onFiltrar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filtrar() {
    this.onFiltrar.emit(this.filtro);
  }

}
