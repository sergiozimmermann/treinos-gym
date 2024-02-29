import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import Utils from '../../Utils/Utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios: any[] = [];
  nmUsuario: string = '';
  lembrarUsuario: boolean = false;

  constructor(private loginService: LoginService
    , private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.loginService.getUsuarios().subscribe(res => {
      this.usuarios = Utils.mapResFirebase(res);
    })
  }

  logar(usuario: any) {
    this.loginService.login(usuario).then(() => this.router.navigateByUrl(''));
  }

}
