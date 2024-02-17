import { Routes, RouterModule } from '@angular/router';
import { TreinosPresetComponent } from './treinos-preset.component';
import { NgModule } from '@angular/core';
import { CanDeactivateGuard } from '../../guard/auth.guard';

const routes: Routes = [
  { path: '', component: TreinosPresetComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TreinosPresetRoutingModule { };
