import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TreinosDiariosComponent } from './treinos-diarios.component';

const routes: Routes = [
    { path: '', component: TreinosDiariosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TreinosDiariosRoutingModule { };
