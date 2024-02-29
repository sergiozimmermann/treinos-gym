import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExercicioPreset } from '../../../../models/ExercicioPreset';

@Component({
  selector: 'app-card-exercicio-preset',
  templateUrl: './card-exercicio-preset.component.html',
  styleUrls: ['./card-exercicio-preset.component.scss']
})
export class CardExercicioPresetComponent implements OnInit {

  formulario!: FormGroup;

  cardChange: boolean = false;

  _exercicioPreset!: ExercicioPreset;
  get exercicioPreset(): ExercicioPreset {
    return this._exercicioPreset;
  }
  @Input() set exercicioPreset(exercicioPreset: ExercicioPreset) {
    this._exercicioPreset = exercicioPreset;
    if (exercicioPreset && exercicioPreset.id) {
      this.formulario.patchValue(exercicioPreset);
    }
  }

  _indexExPreset!: number;
  get indexExPreset(): number {
    return this._indexExPreset;
  }
  @Input() set indexExPreset(indexExPreset: number) {
    this._indexExPreset = indexExPreset;
    if (indexExPreset) {
      this.formulario.get('indexExPreset')?.setValue(indexExPreset);
    }
  }

  @Input() readOnly: boolean = false;

  @Output() exercicioPresetChange = new EventEmitter();
  @Output() onDeleteExercicio = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      id: ['']
      , idPreset: ['']
      , nmExercicio: ['']
      , obsExercicio: ['']
      , qtdSerie: []
      , minRep: []
      , maxRep: []
      , indexExPreset: []
    });
  }

  ngOnInit() {
  }

  onChangeInputs() {
    this.cardChange = true;
  }

}
