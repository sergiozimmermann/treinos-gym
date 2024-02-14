import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatSelectModule } from "@angular/material/select";

const components = [CheckboxComponent, DropdownComponent]

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , MatSelectModule
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule { }
