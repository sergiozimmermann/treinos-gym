import { Component, OnInit } from '@angular/core';

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

  abrirPreset(preset: any) {
    this.presetAtual = preset;
    this.isOpen = true;
  }

}
