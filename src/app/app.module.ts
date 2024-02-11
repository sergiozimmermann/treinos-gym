import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './Utils/components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , RouterModule
    , AppRoutingModule
    , AngularFireModule.initializeApp(environment.firebase)
    , ComponentsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
