import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

const components = [CheckboxComponent]

@NgModule({
  imports: [
    CommonModule
    , FormsModule
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule { }
