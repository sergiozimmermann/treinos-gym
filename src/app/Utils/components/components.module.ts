import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarioComponent } from './calendario/calendario.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const components = [CheckboxComponent, DropdownComponent, CalendarioComponent]

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatFormFieldModule
    , MatInputModule
  ],
  declarations: components,
  exports: components,
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'pt-BR'
  }]
})
export class ComponentsModule { }
