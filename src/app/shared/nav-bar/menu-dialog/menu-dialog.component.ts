import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../../modules/login/services/login.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MenuDialogComponent>
    , private router: Router
    , private loginService: LoginService) { }

  ngOnInit() {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
    this.dialogRef.close();
  }

  logout() {
    this.loginService.logout();
    this.dialogRef.close();
  }

}
