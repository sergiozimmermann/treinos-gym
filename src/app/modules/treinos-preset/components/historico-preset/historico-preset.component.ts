import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TreinosPresetService } from '../../services/treinos-preset.service';
import { UsuarioService } from '../../../../shared/services/usuario.service';
import Utils from '../../../../Utils/Utils';
import { TreinoPreset } from '../../models/TreinoPreset';

@Component({
  selector: 'app-historico-preset',
  templateUrl: './historico-preset.component.html',
  styleUrls: ['./historico-preset.component.scss']
})
export class HistoricoPresetComponent implements OnInit {

  treinosPreset: any[] = [];

  @Output() onSelecionarPreset = new EventEmitter();
  @Output() onAddPreset = new EventEmitter();

  constructor(private presetService: TreinosPresetService
    , private usuarioService: UsuarioService) {
    this.getTreinosPreset();
  }

  ngOnInit() {
  }

  getTreinosPreset() {
    this.usuarioService.getIdUsuario().then(idUsuario => {
      this.presetService.getTreinosPreset(idUsuario).subscribe(res => {
        this.treinosPreset = Utils.mapResFirebase(res);
      });
    });
  }

  adicionarPreset() {
    this.usuarioService.getIdUsuario().then(idUsuario => {
      const preset = new TreinoPreset();
      preset.idUsuario = idUsuario;
      this.onAddPreset.emit(preset);
    });
  }

}
