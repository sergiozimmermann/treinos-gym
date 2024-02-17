import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTreinoDialogComponent } from './components/add-treino-dialog/add-treino-dialog.component';
import { TreinoAtual } from './models/TreinoAtual';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Combo } from '../../Utils/components/dropdown/models/combo';

class EventTreino {
  treino: any;
  click: any;
}

@Component({
  selector: 'app-treinos-diarios',
  templateUrl: './treinos-diarios.component.html',
  styleUrls: ['./treinos-diarios.component.scss']
})
export class TreinosDiariosComponent implements OnInit {

  treinoAtual!: TreinoAtual;
  isOpen: boolean = false;

  constructor(private dialog: MatDialog
    , private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  showAddTreino() {
    const dialogRef = this.dialog.open(AddTreinoDialogComponent, {
      id: 'add-treino-dialog'
      , width: '100%'
      , maxWidth: '100%'
      , height: '80vh'
    });
    dialogRef.componentInstance.onIniciarTreino.subscribe(preset => {
      this.addTreino(preset);
    });
  }

  addTreino(preset: Combo) {
    this.usuarioService.getIdUsuario().then(idUsuario => {
      this.treinoAtual = new TreinoAtual();
      this.treinoAtual.idUsuario = idUsuario;
      this.treinoAtual.idTreinoPreset = preset.value as string;
      this.treinoAtual.nmTreino = preset.label;
      this.isOpen = true;
    });
  }

  abrirTreino(event: EventTreino) {
    if (event.click && ['mdc-button__label', 'mdc-button__label', 'mat-mdc-button-touch-target'].includes(event.click.target.className)) {
      return;
    }

    this.treinoAtual = event.treino;
    this.isOpen = true;
  }

}
