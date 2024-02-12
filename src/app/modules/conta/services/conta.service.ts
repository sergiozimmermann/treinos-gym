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
        this.afs.collection('Usuarios').snapshotChanges().subscribe(res => {
          const usuarios = Utils.mapResFirebase(res);

          // Filtro para achar o id do usuário do Firestore baseado no uid do FireAuth
          const id = usuarios.find((user: any) => user.uid === usuario.uid)?.id;

          // Função para atualizar o usuário do Firestore
          this.afs.doc('Usuarios/' + id).update(usuario).then(() => {
            resolve();
          }).catch(() => reject());
        });
      }).catch(() => reject());
    });

  }

}
