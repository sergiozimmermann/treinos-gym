import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }
  , { path: '', redirectTo: 'treinos-diarios', pathMatch: 'full' }
  , {
    path: '', children: [
      {
        path: '', component: LayoutComponent, children: [
          {
            path: 'treinos-diarios', loadChildren: () => import('./modules/treinos-diarios/treinos-diarios.module').then(m => m.TreinosDiariosModule), canActivate: [AuthGuard]
          },
          { path: 'treinos-preset', loadChildren: () => import('./modules/treinos-preset/treinos-preset.module').then(m => m.TreinosPresetModule), canActivate: [AuthGuard] },
          { path: 'conta', loadChildren: () => import('./modules/conta/conta.module').then(m => m.ContaModule), canActivate: [AuthGuard] }
        ]
      }
    ]
  }
  , { path: '**', redirectTo: 'treinos-diarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
