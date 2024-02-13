import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinosPresetComponent } from './treinos-preset.component';
import { RouterModule } from '@angular/router';
import { HistoricoPresetComponent } from './components/historico-preset/historico-preset.component';
import { ListaPresetComponent } from './components/historico-preset/components/lista-preset/lista-preset.component';
import { CardPresetComponent } from './components/historico-preset/components/lista-preset/card-preset/card-preset.component';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: TreinosPresetComponent }])
  ],
  declarations: [TreinosPresetComponent, HistoricoPresetComponent, ListaPresetComponent, CardPresetComponent]
})
export class TreinosPresetModule { }
