import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Utils from '../../Utils/Utils';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private afs: AngularFirestore
    , private afAuth: AngularFireAuth) { }

  getIdUsuario(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.currentUser.then((user: any) => {
        this.afs.collection('Usuarios', ref => ref.where('uid', '==', user.uid)).snapshotChanges().subscribe(res => {
          return resolve(Utils.mapResFirebase(res)[0].id);
        }, error => reject());
      }).catch(() => reject());
    });
  }

}
