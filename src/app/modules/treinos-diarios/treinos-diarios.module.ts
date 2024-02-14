import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinosDiariosComponent } from './treinos-diarios.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from '../../Utils/components/components.module';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: TreinosDiariosComponent }])
    , MatButtonModule
    , MatInputModule
    , FormsModule
    , ReactiveFormsModule
    , ComponentsModule
  ],
  declarations: [TreinosDiariosComponent]
})
export class TreinosDiariosModule { }
