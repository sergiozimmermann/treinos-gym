import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { TreinosPresetService } from '../../../services/treinos-preset.service';
import Utils from '../../../../../Utils/Utils';
import { ExercicioPreset } from '../../../models/ExercicioPreset';
import { ToastService } from '../../../../../Utils/services/toast/toast.service';
import { CardExercicioPresetComponent } from './card-exercicio-preset/card-exercicio-preset.component';

@Component({
  selector: 'app-lista-exercicios-preset',
  templateUrl: './lista-exercicios-preset.component.html',
  styleUrls: ['./lista-exercicios-preset.component.scss']
})
export class ListaExerciciosPresetComponent implements OnInit {

  @ViewChildren('CardExercicioPreset') CardsExercicioPreset!: any;

  exerciciosPreset: any[] = [];

  exPresetsAdicionados: any[] = [];
  exPresetsDeletados: any[] = [];

  _novoPreset!: boolean;
  get novoPreset(): boolean {
    return this._novoPreset;
  }
  @Input() set novoPreset(novoPreset: boolean) {
    this._novoPreset = novoPreset;
    if (novoPreset) {
      this.addExercicio();
    }
  }

  _idPreset!: string;
  get idPreset(): string {
    return this._idPreset;
  }
  @Input() set idPreset(idPreset: string) {
    this._idPreset = idPreset;
    if (idPreset) {
      this.getExerciciosPreset(idPreset);
    }
  }

  @Input() readOnly: boolean = false;

  @Output() salvarPreset = new EventEmitter();

  constructor(private presetService: TreinosPresetService
    , private toastService: ToastService) { }

  ngOnInit() {
  }

  getExerciciosPreset(idPreset: string) {
    this.presetService.getExerciciosPreset(idPreset).subscribe(res => {
      this.exerciciosPreset = Utils.mapResFirebase(res);
    });
  }

  addExercicio() {
    if (this.readOnly) return; // Controle de segurança
    const exercicio = new ExercicioPreset();
    if (this.idPreset) {
      exercicio.idPreset = this.idPreset;

      // Lógica para variável de controle para adicioanar os exercícios ao salvar
      this.exPresetsAdicionados.push(exercicio);
    }
    this.exerciciosPreset.push(exercicio);
  }

  addExerciciosPreset(idPreset: string) {
    const exerciciosDiarios = this.CardsExercicioPreset._results.map((component: CardExercicioPresetComponent) => component.formulario.getRawValue());
    const promises = exerciciosDiarios.map((exercicio: any, index: number) => {
      exercicio.indexExPreset = index;
      this.addCadaExercicioPreset(exercicio, idPreset)
    });
    // Usando Promise.all para aguardar a conclusão de todas as Promises
    return Promise.all(promises);
  }

  addCadaExercicioPreset(exercicio: any, idPreset: string) {
    return new Promise<void>((resolve) => {
      exercicio.idPreset = idPreset;
      this.presetService.addExercicioPreset(exercicio).then(() => {
        resolve();
      });
    });
  }

  atualizarExerciciosPreset() {
    if (this.exPresetsDeletados.length > 0) {
      this.removerExPresets(this.exPresetsDeletados);
    }
    if (this.exPresetsAdicionados.length > 0) {
      this.addExPresets(this.exPresetsAdicionados);
    }
    const cardsComChange = this.CardsExercicioPreset._results.filter((component: CardExercicioPresetComponent) => component.cardChange === true && component.exercicioPreset.id);
    const exerciciosDiarios = cardsComChange.map((component: CardExercicioPresetComponent) => component.formulario.getRawValue());
    const promises = exerciciosDiarios.map((exercicio: any) => this.atualizaCadaExercicio(exercicio));
    // Usando Promise.all para aguardar a conclusão de todas as Promises
    return Promise.all(promises);
  }

  atualizaCadaExercicio(exercicio: any) {
    if (this.readOnly) return; // Controle de segurança
    return new Promise<void>((resolve) => {
      this.presetService.atualizarExercicioPreset(exercicio).then(() => {
        resolve();
      });
    });
  }

  removerExPreset(idExercicioPreset: string, index: number) {
    if (this.readOnly) return; // Controle de segurança

    // Verificação para ver se está adicionando ou atualizando o preset
    if (idExercicioPreset) {
      if (this.idPreset) {
        // Lógica para variável de controle para deletar os exercícios ao salvar
        this.exPresetsDeletados.push(this.exerciciosPreset[index]);
      }

      this.exerciciosPreset = this.exerciciosPreset.filter(exercicio => exercicio.id !== idExercicioPreset);
    }
    else {
      this.exerciciosPreset.splice(index, 1);
    }
  }

  addExPresets(exercicios: any[]) {
    exercicios.forEach((exercicio: any) => {
      const cardPreset: CardExercicioPresetComponent = this.CardsExercicioPreset.find((component: CardExercicioPresetComponent) => component.exercicioPreset.id === exercicio.id);
      const exPreset = cardPreset.formulario.getRawValue();
      exPreset.idPreset = this.idPreset;
      this.presetService.addExercicioPreset(exPreset);
    });
  }

  removerExPresets(exercicios: any[]) {
    exercicios.forEach((exercicio: any) => {
      this.presetService.deletarExercicioPreset(exercicio.id);
    });
  }

}
