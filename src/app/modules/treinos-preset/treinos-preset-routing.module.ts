import { Routes, RouterModule } from '@angular/router';
import { TreinosPresetComponent } from './treinos-preset.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: TreinosPresetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TreinosPresetRoutingModule { };
