import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TreinosDiariosService } from '../../services/treinos-diarios.service';
import { ToastService } from '../../../../Utils/services/toast/toast.service';
import { TreinoDiarioAtualComponent } from './components/treino-diario-atual/treino-diario-atual.component';

@Component({
  selector: 'app-editor-treino-diario',
  templateUrl: './editor-treino-diario.component.html',
  styleUrls: ['./editor-treino-diario.component.scss']
})
export class EditorTreinoDiarioComponent implements OnInit {

  @ViewChild('TreinoDiarioAtual') TreinoDiarioAtual!: TreinoDiarioAtualComponent;

  needAtualizarTreino: boolean = false;

  @Input() treinoAtual: any;

  @Output() onSalvarOuCancelar = new EventEmitter();

  constructor(private treinoService: TreinosDiariosService
    , private toastService: ToastService) { }

  ngOnInit() {
  }

  salvarTreino() {
    this.TreinoDiarioAtual.ListaExercicioAtual.atualizarExerciciosDiarios().then(() => {
      if (this.needAtualizarTreino) {
        this.treinoService.atualizarTreinoDiario(this.treinoAtual).then(() => {
          this.onSalvarOuCancelar.emit();
          this.toastService.showMensagem('Salvo com sucesso!');
        });
      }
      else {
        this.onSalvarOuCancelar.emit();
        this.toastService.showMensagem('Salvo com sucesso!');
      }
    }).catch(() => {
      this.toastService.showMensagem('Ocorreu um erro!');
    });
  }

}
