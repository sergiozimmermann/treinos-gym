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

  cardChange: boolean = false;

  tpExercicio: number = 1;
  qtdSerie: number = 3;
  qtdDrop: number = 3;

  _exercicioPreset!: ExercicioPreset;
  get exercicioPreset(): ExercicioPreset {
    return this._exercicioPreset;
  }
  @Input() set exercicioPreset(exercicioPreset: ExercicioPreset) {
    this._exercicioPreset = exercicioPreset;
    if (exercicioPreset && exercicioPreset.id) {
      this.formulario.patchValue(exercicioPreset);

      // Map para adicionar os valores das reps do dropset no formulário
      if (exercicioPreset.tpExercicio === TipoExercicio.DROPSET) {
        exercicioPreset.minRepsDrop?.map(rep => {
          (this.formulario.get('minRepsDrop') as FormArray).push(this.formBuilder.control(rep));
        });
        exercicioPreset.maxRepsDrop?.map(rep => {
          (this.formulario.get('maxRepsDrop') as FormArray).push(this.formBuilder.control(rep));
        });
      }

      this.adicionarCamposDinamicosDropset();
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
      , qtdSerie: [3]
      , minRep: []
      , maxRep: []
      , indexExPreset: []
      // Biset
      , nmSet1: []
      , minRepBiset1: []
      , maxRepBiset1: []
      , nmSet2: []
      , minRepBiset2: []
      , maxRepBiset2: []
      // Dropset
      , qtdDrop: [3]
      , minRepsDrop: formBuilder.array([])
      , maxRepsDrop: formBuilder.array([])
    });

    this.formulario.get('tpExercicio')?.valueChanges.subscribe(value => {
      this.tpExercicio = value;
      this.adicionarCamposDinamicosDropset();
    });
    this.formulario.get('qtdSerie')?.valueChanges.subscribe(value => {
      this.qtdSerie = value;
    });
    this.formulario.get('qtdDrop')?.valueChanges.subscribe(value => {
      this.qtdDrop = value;
      if (!this.exercicioPreset?.id) this.adicionarCamposDinamicosDropset();
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

  adicionarCamposDinamicosDropset() {
    // Função para controlar a quantidade de séries do Dropset
    const form = this.formulario.getRawValue();
    if (form.tpExercicio !== TipoExercicio.DROPSET || !form.qtdDrop) return;

    const minRepsDrop = this.formulario.get('minRepsDrop') as FormArray;
    const maxRepsDrop = this.formulario.get('maxRepsDrop') as FormArray;

    const novosDrops = form.qtdDrop - form.minRepsDrop.length;

    if (novosDrops > 0) {
      for (let i = 0; i < novosDrops; i++) {
        minRepsDrop.push(this.formBuilder.control(0));
        maxRepsDrop.push(this.formBuilder.control(0));
      }
    }
    else {
      (this.formulario.get('minRepsDrop') as FormArray).controls.splice(form.qtdDrop);
      (this.formulario.get('maxRepsDrop') as FormArray).controls.splice(form.qtdDrop);
    }
  }

  getControls(control: string) {
    return (this.formulario.get(control) as FormArray).controls;
  }

}
