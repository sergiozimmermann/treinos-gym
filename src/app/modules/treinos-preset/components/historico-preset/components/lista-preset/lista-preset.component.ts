import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-preset',
  templateUrl: './lista-preset.component.html',
  styleUrls: ['./lista-preset.component.scss']
})
export class ListaPresetComponent implements OnInit {

  @Input() treinosPreset: any[] = [];

  @Output() onSelecionarPreset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
