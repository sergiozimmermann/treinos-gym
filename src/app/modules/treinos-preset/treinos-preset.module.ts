import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinosPresetComponent } from './treinos-preset.component';
import { RouterModule } from '@angular/router';
import { HistoricoPresetComponent } from './components/historico-preset/historico-preset.component';
import { ListaPresetComponent } from './components/historico-preset/components/lista-preset/lista-preset.component';
import { CardPresetComponent } from './components/historico-preset/components/lista-preset/card-preset/card-preset.component';
import { EditorPresetComponent } from './components/editor-preset/editor-preset.component';
import { ListaExerciciosPresetComponent } from './components/editor-preset/lista-exercicios-preset/lista-exercicios-preset.component';
import { CardExercicioPresetComponent } from './components/editor-preset/lista-exercicios-preset/card-exercicio-preset/card-exercicio-preset.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: TreinosPresetComponent }])
    , MatButtonModule
    , MatInputModule
    , FormsModule
    , ReactiveFormsModule
  ],
  declarations: [
    TreinosPresetComponent
    , HistoricoPresetComponent
    , ListaPresetComponent
    , CardPresetComponent
    , EditorPresetComponent
    , ListaExerciciosPresetComponent
    , CardExercicioPresetComponent
  ]
})
export class TreinosPresetModule { }
