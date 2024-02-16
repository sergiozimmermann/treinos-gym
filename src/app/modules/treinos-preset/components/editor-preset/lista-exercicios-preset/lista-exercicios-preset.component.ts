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

  addExercicioPreset() {
    if (this.readOnly) return; // Controle de segurança
    this.salvarPreset.emit(true);
    const preset = new ExercicioPreset();
    preset.idPreset = this.idPreset;
    this.presetService.addExercicioPreset(preset as any).then(() => {
      this.exerciciosPreset.push(preset);
      this.toastService.showMensagem('Adicionado com Sucesso!');
    }).catch(() => this.toastService.showMensagem('Ocorreu um erro!'));
  }

  atualizaCadaExercicio(exercicio: any) {
    if (this.readOnly) return; // Controle de segurança
    return new Promise<void>((resolve) => {
      this.presetService.atualizarExercicioPreset(exercicio).then(() => {
        resolve();
      });
    });
  }

  atualizarExerciciosPreset(): Promise<any> {
    if (this.readOnly) {
      return Promise.all([false]); // Controle de segurança
    }
    const cardsComChange = this.CardsExercicioPreset._results.filter((component: CardExercicioPresetComponent) => component.cardChange === true);
    const exerciciosPresetForm = cardsComChange.map((component: CardExercicioPresetComponent) => component.formulario.getRawValue());
    const promises = exerciciosPresetForm.map((exercicio: any) => this.atualizaCadaExercicio(exercicio));
    // Usando Promise.all para aguardar a conclusão de todas as Promises
    return Promise.all(promises);
  }

  removerExPreset(idExercicioPreset: string) {
    if (this.readOnly) return; // Controle de segurança
    this.presetService.deletarExercicioPreset(idExercicioPreset).then(() => {
      this.exerciciosPreset = this.exerciciosPreset.filter(exercicio => exercicio.id !== idExercicioPreset);
      this.toastService.showMensagem('Deletado com Sucesso!');
    }).catch(() => this.toastService.showMensagem('Ocorreu um erro!'));
  }

}
