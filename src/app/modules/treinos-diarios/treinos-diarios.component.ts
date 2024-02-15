import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTreinoDialogComponent } from './components/add-treino-dialog/add-treino-dialog.component';

@Component({
  selector: 'app-treinos-diarios',
  templateUrl: './treinos-diarios.component.html',
  styleUrls: ['./treinos-diarios.component.scss']
})
export class TreinosDiariosComponent implements OnInit {

  treinoAtual: any;
  isOpen: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showAddTreino() {
    this.dialog.open(AddTreinoDialogComponent, {
      id: 'add-treino-dialog'
      , width: '100%'
      , maxWidth: '100%'
    });
  }

  addTreino() {
    this.isOpen = true;
  }

  selecionarTreino(treino: any) {
    this.treinoAtual = treino;
    this.isOpen = true;
  }

}
