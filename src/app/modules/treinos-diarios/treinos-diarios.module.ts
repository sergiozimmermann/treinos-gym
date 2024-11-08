import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinosDiariosComponent } from './treinos-diarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from '../../Utils/components/components.module';
import { HistoricoTreinosDiariosComponent } from './components/historico-treinos-diarios/historico-treinos-diarios.component';
import { EditorTreinoDiarioComponent } from './components/editor-treino-diario/editor-treino-diario.component';
import { TreinosDiariosRoutingModule } from './treinos-diarios-routing.module';
import { FiltroTreinosDiariosComponent } from './components/historico-treinos-diarios/components/filtro-treinos-diarios/filtro-treinos-diarios.component';
import { ListaTreinosDiariosComponent } from './components/historico-treinos-diarios/components/lista-treinos-diarios/lista-treinos-diarios.component';
import { CardTreinoDiarioComponent } from './components/historico-treinos-diarios/components/lista-treinos-diarios/card-treino-diario/card-treino-diario.component';
import { TreinoDiarioAtualComponent } from './components/editor-treino-diario/components/treino-diario-atual/treino-diario-atual.component';
import { ListaExercicioAtualComponent } from './components/editor-treino-diario/components/treino-diario-atual/lista-exercicio-atual/lista-exercicio-atual.component';
import { CardExercicioAtualComponent } from './components/editor-treino-diario/components/treino-diario-atual/lista-exercicio-atual/card-exercicio-atual/card-exercicio-atual.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AddTreinoDialogComponent } from './components/add-treino-dialog/add-treino-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { TreinosPresetModule } from '../treinos-preset/treinos-preset.module';

@NgModule({
  imports: [
    CommonModule
    , TreinosDiariosRoutingModule
    , MatButtonModule
    , MatInputModule
    , FormsModule
    , ReactiveFormsModule
    , ComponentsModule
    , MatDatepickerModule
    , MatDialogModule
    , MatDividerModule
    , TreinosPresetModule
  ],
  declarations: [
    TreinosDiariosComponent
    , HistoricoTreinosDiariosComponent
    , FiltroTreinosDiariosComponent
    , ListaTreinosDiariosComponent
    , CardTreinoDiarioComponent
    , EditorTreinoDiarioComponent
    , TreinoDiarioAtualComponent
    , ListaExercicioAtualComponent
    , CardExercicioAtualComponent
    , AddTreinoDialogComponent
  ]
})
export class TreinosDiariosModule { }
