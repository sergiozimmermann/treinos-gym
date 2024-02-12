import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaComponent } from './conta.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: ContaComponent }])
    , FormsModule
    , ReactiveFormsModule
    , MatInputModule
    , MatButtonModule
  ],
  declarations: [ContaComponent]
})
export class ContaModule { }
