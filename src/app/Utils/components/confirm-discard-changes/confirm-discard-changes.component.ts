import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-discard-changes',
  templateUrl: './confirm-discard-changes.component.html',
  styleUrls: ['./confirm-discard-changes.component.scss']
})
export class ConfirmDiscardChangesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDiscardChangesComponent>) { }

  ngOnInit() {
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

}
