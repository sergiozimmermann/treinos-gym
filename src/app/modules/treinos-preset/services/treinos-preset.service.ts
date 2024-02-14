import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinosPresetService {

  constructor(private afs: AngularFirestore) { }

  getTreinosPreset(idUsuario: string): Observable<any> {
    return this.afs.collection('Treinos_Preset', ref => ref.where('idUsuario', '==', idUsuario).orderBy('divPreset')).snapshotChanges();
  }

  addPreset(preset: any): Promise<any> {
    preset = JSON.parse(JSON.stringify(preset));
    delete preset.id;
    return this.afs.collection('Treinos_Preset').add(preset);
  }

  atualizarPreset(preset: any): Promise<any> {
    const idPreset: string = preset.id;
    delete preset.id;
    return this.afs.collection('Treinos_Preset').doc(idPreset).update(preset);
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
