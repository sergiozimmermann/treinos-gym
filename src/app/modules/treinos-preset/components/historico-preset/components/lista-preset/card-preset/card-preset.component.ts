import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

class Preset {
  idPreset?: string;
  nmPreset?: string;
  divPreset?: string;
}

@Component({
  selector: 'app-card-preset',
  templateUrl: './card-preset.component.html',
  styleUrls: ['./card-preset.component.scss']
})
export class CardPresetComponent implements OnInit {

  @Input() preset: Preset = new Preset();

  @Output() deletarPreset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
