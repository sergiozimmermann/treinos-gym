import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent implements OnInit {

  @Input() usuario?: any;
  @Output() usuarioSelecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecionarUsuario() {
    this.usuarioSelecionado.emit(this.usuario);
  }

}
