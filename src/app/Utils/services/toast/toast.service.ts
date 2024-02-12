import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showMensagem(message: string, config?: MatSnackBarConfig, action?: string) {
    if (config) {
      config.duration = config.duration ?? 3000;
      config.verticalPosition = config.verticalPosition ?? 'top';
    }
    else {
      config = { duration: 3000, verticalPosition: 'top' };
    }
    this.snackBar.open(message, action, config);
  }

}
