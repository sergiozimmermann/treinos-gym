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
import { ConfirmDiscardChangesComponent } from './confirm-discard-changes/confirm-discard-changes.component';
import { MatButtonModule } from '@angular/material/button';

const components = [CheckboxComponent, DropdownComponent, CalendarioComponent, ConfirmDiscardChangesComponent]

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatFormFieldModule
    , MatInputModule
    , MatButtonModule
  ],
  declarations: components,
  exports: components,
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'pt-BR'
  }]
})
export class ComponentsModule { }
