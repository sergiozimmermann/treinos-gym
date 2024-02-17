import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TreinosDiariosComponent } from './treinos-diarios.component';
import { CanDeactivateGuard } from '../../guard/auth.guard';

const routes: Routes = [
    { path: '', component: TreinosDiariosComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TreinosDiariosRoutingModule { };
