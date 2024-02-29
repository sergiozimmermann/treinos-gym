import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dataBase = this.afs.collection('/Usuarios');

  constructor(private afs: AngularFirestore
    , private afAuth: AngularFireAuth
    , private router: Router) { }

  getUsuarios() {
    return this.dataBase.snapshotChanges();
  }

  login(usuario: any): Promise<any> {
    // Login com email e senha padrão para cada usuário no banco de dados
    return this.afAuth.signInWithEmailAndPassword(usuario.email, '12345678');
  }

  logout() {
    this.router.navigateByUrl('login');
    this.afAuth.signOut();
  }

}
