import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ConfirmDiscardChangesComponent } from '../confirm-discard-changes.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDiscardChangesService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(): Observable<any> {
    const openDialogs = this.dialog.openDialogs.filter(dialog => dialog.id === 'confirm-discard-changes');
    if (openDialogs.length === 0) {
      const dialogRef = this.dialog.open(ConfirmDiscardChangesComponent, { id: 'confirm-discard-changes' });

      return dialogRef.afterClosed();
    }
    else {
      return of(false);
    }
  }

}
