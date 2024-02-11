import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return new Promise((resolve) => {
    authService.isLogado().subscribe(logado => {
      if (logado) {
        resolve(true)
        return;
      }

      router.navigateByUrl('/login');
      resolve(false)
      return;
    })
  });
};
