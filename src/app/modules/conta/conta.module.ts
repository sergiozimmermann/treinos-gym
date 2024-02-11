import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaComponent } from './conta.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: ContaComponent }])
  ],
  declarations: [ContaComponent]
})
export class ContaModule { }
