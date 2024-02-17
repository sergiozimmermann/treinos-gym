import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { ConfirmDiscardChangesService } from '../Utils/components/confirm-discard-changes/services/confirm-discard-changes.service';

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

export const CanDeactivateGuard: CanDeactivateFn<any> = (component: any) => {
  if (component.isOpen) {
    return inject(ConfirmDiscardChangesService).openConfirmDialog();
  }
  else {
    return true;
  }
}