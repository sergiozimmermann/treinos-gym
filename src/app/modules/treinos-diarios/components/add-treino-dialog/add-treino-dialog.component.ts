import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TreinosPresetService } from '../../../treinos-preset/services/treinos-preset.service';
import { UsuarioService } from '../../../../shared/services/usuario.service';
import Utils from '../../../../Utils/Utils';
import { Combo } from '../../../../Utils/components/dropdown/models/combo';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-treino-dialog',
  templateUrl: './add-treino-dialog.component.html',
  styleUrls: ['./add-treino-dialog.component.scss']
})
export class AddTreinoDialogComponent implements OnInit {

  preset!: Combo;
  showExerciciosPreset: boolean = false;

  private _idPreset!: string;
  public get idPreset(): string {
    return this._idPreset;
  }
  public set idPreset(idPreset: string) {
    this._idPreset = idPreset;
    if (idPreset) {
      this.showExerciciosPreset = true;
    }
    else {
      this.showExerciciosPreset = false;
    }
  }

  @Output() onIniciarTreino = new EventEmitter();

  comboPresets: Combo[] = [];

  constructor(private presetService: TreinosPresetService
    , private usuarioService: UsuarioService
    , public dialogRef: MatDialogRef<AddTreinoDialogComponent>) {
    this.getComboPresets();
  }

  ngOnInit() {
  }

  getComboPresets() {
    this.usuarioService.getIdUsuario().then(idUsuario => {
      this.presetService.getComboPresets(idUsuario).subscribe(res => {
        const presets = Utils.mapResFirebase(res);
        this.comboPresets = Utils.montaCombo(presets, 'nmPreset');
      });
    });
  }

  iniciarTreino() {
    this.onIniciarTreino.emit(this.preset);
    this.dialogRef.close();
  }

}
