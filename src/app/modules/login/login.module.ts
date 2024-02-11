import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardUsuarioComponent } from './card-usuario/card-usuario.component';
import { ComponentsModule } from '../../Utils/components/components.module';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([{ path: '', component: LoginComponent }])
    , FormsModule
    , ComponentsModule
  ],
  declarations: [LoginComponent, CardUsuarioComponent]
})
export class LoginModule { }
