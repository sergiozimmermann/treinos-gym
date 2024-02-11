import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { MenuDialogComponent } from './nav-bar/menu-dialog/menu-dialog.component';

const components = [TitleBarComponent, NavBarComponent, MenuDialogComponent]

@NgModule({
  imports: [
    CommonModule
    , MatIconModule
    , MatButtonModule
    , RouterLink
    , MatDialogModule
  ],
  declarations: components
  , exports: components
})
export class SharedModule { }
