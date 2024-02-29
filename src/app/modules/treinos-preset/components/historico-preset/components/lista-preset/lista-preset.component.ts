import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreinosPresetService } from '../../../../services/treinos-preset.service';
import { ToastService } from '../../../../../../Utils/services/toast/toast.service';
import { TreinoPreset } from '../../../../models/TreinoPreset';
import { UsuarioService } from '../../../../../../shared/services/usuario.service';

@Component({
  selector: 'app-lista-preset',
  templateUrl: './lista-preset.component.html',
  styleUrls: ['./lista-preset.component.scss']
})
export class ListaPresetComponent implements OnInit {

  @Input() treinosPreset: TreinoPreset[] = [];

  @Output() onSelecionarPreset = new EventEmitter();

  constructor(private presetService: TreinosPresetService
    , private usuarioService: UsuarioService
    , private toastService: ToastService) { }

  ngOnInit() {
  }

  deletarPreset(idPreset: string) {
    this.presetService.deletarPreset(idPreset).then(() => {
      this.toastService.showMensagem('Deletado com sucesso!');
    }).catch(() => {
      this.toastService.showMensagem('Ocorreu um erro!');
    });
  }

}
