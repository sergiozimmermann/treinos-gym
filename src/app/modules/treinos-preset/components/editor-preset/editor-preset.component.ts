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

  novoPreset: boolean = false;

  _presetAtual!: any;
  get presetAtual(): any {
    return this._presetAtual;
  }
  @Input() set presetAtual(presetAtual: any) {
    this._presetAtual = presetAtual;
    if (presetAtual && !presetAtual.id) {
      this.novoPreset = true;
    }
  }

  @Output() onSalvarOuCancelar = new EventEmitter();

  constructor(private presetService: TreinosPresetService
    , private toastService: ToastService) { }

  ngOnInit() {
  }

  salvarPreset() {
    if (this.presetAtual?.id) {
      this.atualizarPreset();
    }
    else {
      this.addPreset();
    }
  }

  addPreset() {
    this.presetService.addPreset(this.presetAtual).then(res => {
      this.ListaExericiosPreset.addExerciciosPreset(res.id).then(() => {
        this.onSalvarOuCancelar.emit();
        this.toastService.showMensagem('Adicionado com sucesso!');
      }).catch(() => {
        this.toastService.showMensagem('Ocorreu um erro!');
      })
    }).catch(() => {
      this.toastService.showMensagem('Ocorreu um erro!');
    });
  }

  atualizarPreset() {
    this.ListaExericiosPreset.atualizarExerciciosPreset().then(() => {
      if (this.needAtualizarPreset) {
        this.presetService.atualizarPreset(this.presetAtual).then(() => {
          this.onSalvarOuCancelar.emit();
          this.toastService.showMensagem('Atualizado com sucesso!');
        }).catch(() => this.toastService.showMensagem('Ocorreu um erro!'));
      }
      else {
        this.onSalvarOuCancelar.emit();
        this.toastService.showMensagem('Atualizado com sucesso!');
      }
    }).catch(() => this.toastService.showMensagem('Ocorreu um erro!'));
  }

}
