import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiltroTreinos } from '../../../../models/FiltroTreinos';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-treinos-diarios',
  templateUrl: './filtro-treinos-diarios.component.html',
  styleUrls: ['./filtro-treinos-diarios.component.scss']
})
export class FiltroTreinosDiariosComponent implements OnInit {

  filtroForm!: FormGroup;
  filtro: FiltroTreinos = new FiltroTreinos();

  @Output() onFiltrar = new EventEmitter();
  @Output() adicionarTreino = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.filtroForm = formBuilder.group({
      nmTreino: [],
      dtTreinoIni: [],
      dtTreinoFim: []
    });
  }

  ngOnInit() {
  }

  filtrar() {
    this.onFiltrar.emit(this.filtro);
  }

}
