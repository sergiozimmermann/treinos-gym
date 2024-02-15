import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TreinosDiariosService } from '../../services/treinos-diarios.service';
import { ToastService } from '../../../../Utils/services/toast/toast.service';
import { ListaTreinosDiariosComponent } from '../historico-treinos-diarios/components/lista-treinos-diarios/lista-treinos-diarios.component';

@Component({
  selector: 'app-editor-treino-diario',
  templateUrl: './editor-treino-diario.component.html',
  styleUrls: ['./editor-treino-diario.component.scss']
})
export class EditorTreinoDiarioComponent implements OnInit {

  @ViewChild('ListaTreinosDiarios') ListaTreinosDiarios!: ListaTreinosDiariosComponent;

  needAtualizarTreino: boolean = false;

  @Input() treinoAtual: any;

  @Output() onSalvarOuCancelar = new EventEmitter();

  constructor(private treinosService: TreinosDiariosService
    , private toastService: ToastService) { }

  ngOnInit() {
  }

  salvarTreino(naoFecharPagina?: boolean) {

  }

}
