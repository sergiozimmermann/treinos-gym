import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinosPresetComponent } from './treinos-preset.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: TreinosPresetComponent }])
  ],
  declarations: [TreinosPresetComponent]
})
export class TreinosPresetModule { }
