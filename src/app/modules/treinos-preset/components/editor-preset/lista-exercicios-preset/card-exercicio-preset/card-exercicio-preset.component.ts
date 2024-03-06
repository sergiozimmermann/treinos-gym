import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ExercicioPreset } from '../../../../models/ExercicioPreset';
import { TipoExercicio } from '../../../../../../Utils/Enum/TipoExercicio.enum';

@Component({
  selector: 'app-card-exercicio-preset',
  templateUrl: './card-exercicio-preset.component.html',
  styleUrls: ['./card-exercicio-preset.component.scss']
})
export class CardExercicioPresetComponent implements OnInit {

  formulario!: FormGroup;
  FormArray = FormArray;

  cardChange: boolean = false;

  tpExercicio: number = 1;
  qtdSerie: number = 1;

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
      , tpExercicio: [1]
      , qtdSerie: []
      , minRep: []
      , maxRep: []
      , nmSet1: []
      , minRepBiset1: []
      , maxRepBiset1: []
      , nmSet2: []
      , minRepBiset2: []
      , maxRepBiset2: []
      , indexExPreset: []
    });

    this.formulario.get('tpExercicio')?.valueChanges.subscribe(value => {
      this.tpExercicio = value;
    });
    this.formulario.get('qtdSerie')?.valueChanges.subscribe(value => {
      this.qtdSerie = value;
    });
  }

  ngOnInit() {
  }

  onChangeInputs() {
    this.cardChange = true;
  }

  getRange(value: number): number[] {
    // Função para simular um array com o número de séries do exercício
    return Array.from({ length: value }, (_, index) => index + 1);
  }

  // adicionarCamposDinamicosBiset() {
  //   // Função para controlar a quantidade de séries do biset

  //   if (this.tpExercicio !== TipoExercicio.BISET) return;
  //   const qtdSerie = this.formulario.get('qtdSerie')?.value;
  //   if (!qtdSerie) return;

  //   if (this.formulario.get('minRepBiset1') instanceof FormArray &&
  //     this.formulario.get('maxRepBiset1') instanceof FormArray) {
  //     const minRepBisetArray1 = this.formulario.get('minRepBiset1') as FormArray;
  //     const maxRepBisetArray1 = this.formulario.get('maxRepBiset1') as FormArray;
  //     const minRepBisetArray2 = this.formulario.get('minRepBiset2') as FormArray;
  //     const maxRepBisetArray2 = this.formulario.get('maxRepBiset2') as FormArray;

  //     const novasSeries = qtdSerie - (this.formulario.get('minRepBiset1') as FormArray).controls.length;

  //     if (novasSeries > 0) {
  //       for (let i = 0; i < novasSeries; i++) {
  //         minRepBisetArray1.push(this.formBuilder.control(0));
  //         maxRepBisetArray1.push(this.formBuilder.control(0));
  //         minRepBisetArray2.push(this.formBuilder.control(0));
  //         maxRepBisetArray2.push(this.formBuilder.control(0));
  //       }
  //     }
  //     else {
  //       (this.formulario.get('minRepBiset1') as FormArray).controls.splice(qtdSerie);
  //       (this.formulario.get('maxRepBiset1') as FormArray).controls.splice(qtdSerie);
  //       (this.formulario.get('minRepBiset2') as FormArray).controls.splice(qtdSerie);
  //       (this.formulario.get('maxRepBiset2') as FormArray).controls.splice(qtdSerie);
  //     }
  //   }
  // }

  // getControls(control: string) {
  //   return (this.formulario.get(control) as FormArray).controls;
  // }

}
