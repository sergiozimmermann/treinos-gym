import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ListaExerciciosPresetComponent } from './lista-exercicios-preset/lista-exercicios-preset.component';
import { ToastService } from '../../../../Utils/services/toast/toast.service';
import { TreinosPresetService } from '../../services/treinos-preset.service';

@Component({
  selector: 'app-editor-preset',
  templateUrl: './editor-preset.component.html',
  styleUrls: ['./editor-preset.component.scss']
})
export class EditorPresetComponent implements OnInit {

  @ViewChild('ListaExericiosPreset') ListaExericiosPreset!: ListaExerciciosPresetComponent;

  needAtualizarPreset: boolean = false;

  @Input() presetAtual: any;

  @Output() onSalvarOuCancelar = new EventEmitter();

  constructor(private presetService: TreinosPresetService
    , private toastService: ToastService) { }

  ngOnInit() {
  }

  salvarPreset(naoFecharPagina?: boolean) {
    this.ListaExericiosPreset.atualizarExerciciosPreset().then(() => {
      if (this.needAtualizarPreset) {
        this.presetService.atualizarPreset(this.presetAtual).then(() => {
          if (!naoFecharPagina) this.onSalvarOuCancelar.emit();
          this.toastService.showMensagem('Salvo com sucesso!');
        }).catch(() => {
          this.toastService.showMensagem('Ocorreu um erro!');
        });
      }
      else {
        if (!naoFecharPagina) this.onSalvarOuCancelar.emit();
        this.toastService.showMensagem('Salvo com sucesso!');
      }
    }).catch(() => {
      this.toastService.showMensagem('Ocorreu um erro!');
    });
  }

}
