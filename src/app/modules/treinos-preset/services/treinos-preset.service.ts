import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinosPresetService {

  constructor(private afs: AngularFirestore
    , private afAuth: AngularFireAuth) { }

  getTreinosPreset(idUsuario: string): Observable<any> {
    return this.afs.collection('Treinos_Preset', ref => ref.where('idUsuario', '==', idUsuario).orderBy('divPreset')).snapshotChanges();
  }

  addPreset(preset: any): Promise<any> {
    preset.dtCriacao = new Date();
    preset = JSON.parse(JSON.stringify(preset));
    return this.afs.collection('Treinos_Preset').add(preset);
  }

  atualizarPreset(preset: any): Promise<any> {
    return this.afs.collection('Treinos_Preset').doc(preset.id).update(preset);
  }

  deletarPreset(idPreset: string) {
    this.deletarExerciciosPorPreset(idPreset);
    return this.afs.collection('Treinos_Preset').doc(idPreset).delete();
  }

  deletarExerciciosPorPreset(idPreset: string) {
    this.afs.collection('Exercicios_Preset', ref => ref.where('idPreset', '==', idPreset)).get().subscribe(res => {
      res.forEach(doc => {
        doc.ref.delete();
      });
    });
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

  deletarExercicioPreset(idExercicioPreset: string): Promise<any> {
    return this.afs.collection('Exercicios_Preset').doc(idExercicioPreset).delete();
  }

}
