import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { updateProfile } from "firebase/auth";
import Utils from '../../../Utils/Utils';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private afAuth: AngularFireAuth
    , private afs: AngularFirestore) { }

  getUsuario(): Promise<any> {
    return this.afAuth.currentUser;
  }

  atualizaUsuario(usuarioAuth: any, usuario: any): Promise<void> {
    return new Promise((resolve, reject) => {
      // Atualiza o Usuário do FireAuth
      updateProfile(usuarioAuth, { displayName: usuario.nmUsuario }).then(() => {

        // Se tiver sucesso, atualiza o Usuário do Firestore
        this.afs.collection('Usuarios', ref => ref.where('uid', '==', usuario.uid)).snapshotChanges().subscribe(res => {
          const id = Utils.mapResFirebase(res)[0].id;

          // Função para atualizar o usuário do Firestore
          this.afs.doc('Usuarios/' + id).update(usuario).then(() => {
            resolve();
          }).catch(() => reject());
        });
      }).catch(() => reject());
    });
  }

}
