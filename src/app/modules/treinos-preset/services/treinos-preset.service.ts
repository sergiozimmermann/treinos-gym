import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TreinosPresetService {

  constructor(private afs: AngularFirestore
    , private afAuth: AngularFireAuth) { }

  getTreinosPreset(idUsuario: string) {
    return this.afs.collection('Treinos_Preset', ref => ref.where('idUsuario', '==', idUsuario)).snapshotChanges();
  }

}
