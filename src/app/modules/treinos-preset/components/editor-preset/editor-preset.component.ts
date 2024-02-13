import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ListaExerciciosPresetComponent } from './lista-exercicios-preset/lista-exercicios-preset.component';
import { ToastService } from '../../../../Utils/services/toast/toast.service';

@Component({
  selector: 'app-editor-preset',
  templateUrl: './editor-preset.component.html',
  styleUrls: ['./editor-preset.component.scss']
})
export class EditorPresetComponent implements OnInit {

  @ViewChild('ListaExericiosPreset') ListaExericiosPreset!: ListaExerciciosPresetComponent;

  @Input() presetAtual: any;

  @Output() onSalvarOuCancelar = new EventEmitter();

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  salvarPreset() {
    this.ListaExericiosPreset.atualizarExerciciosPreset().then(() => {
      this.onSalvarOuCancelar.emit();
      this.toastService.showMensagem('Salvo com sucesso!');
    });
  }

}
