import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MenuDialogComponent>
    , private router: Router) { }

  ngOnInit() {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
    this.dialogRef.close();
  }

}
