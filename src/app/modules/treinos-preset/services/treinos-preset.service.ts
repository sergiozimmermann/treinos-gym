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

  getExerciciosPreset(idPreset: string) {
    return this.afs.collection('Exercicios_Preset', ref => ref.where('idPreset', '==', idPreset).orderBy('dtCriacao', 'desc')).snapshotChanges();
  }

  addExercicioPreset(preset: any): Promise<any> {
    preset = JSON.stringify(preset);
    preset = JSON.parse(preset);
    preset.dtCriacao = new Date();
    return this.afs.collection('Exercicios_Preset').add(preset);
  }

  atualizarExercicioPreset(preset: any): Promise<any> {
    return this.afs.collection('Exercicios_Preset').doc(preset.id).update(preset);
  }

  deletaExercicioPreset(idExercicioPreset: string): Promise<any> {
    return this.afs.collection('Exercicios_Preset').doc(idExercicioPreset).delete();
  }

}
