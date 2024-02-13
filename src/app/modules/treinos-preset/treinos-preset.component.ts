import { Component, OnInit } from '@angular/core';

class EventPreset {
  preset: any;
  click: any;
}

@Component({
  selector: 'app-treinos-preset',
  templateUrl: './treinos-preset.component.html',
  styleUrls: ['./treinos-preset.component.scss']
})
export class TreinosPresetComponent implements OnInit {

  isOpen: boolean = false;
  presetAtual: any;

  constructor() {
  }

  ngOnInit() {
  }

  abrirPreset(event: EventPreset) {
    if (event.click && ['mdc-button__label', 'mdc-button__label', 'mat-mdc-button-touch-target'].includes(event.click.target.className)) {
      return;
    }
    this.presetAtual = event.preset;
    this.isOpen = true;
  }

}
