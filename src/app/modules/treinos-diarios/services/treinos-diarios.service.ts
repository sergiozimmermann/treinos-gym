import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FiltroTreinos } from '../models/FiltroTreinos';
import { Observable } from 'rxjs';
import { TreinoAtual } from '../models/TreinoAtual';

@Injectable({
  providedIn: 'root'
})
export class TreinosDiariosService {

  constructor(private afs: AngularFirestore) { }

  getTreinos(idUsuario: string, filtro?: FiltroTreinos): Observable<any> {
    if (filtro && (filtro.nmTreino !== '' || filtro.dtTreinoIni || filtro.dtTreinoFim)) {
      return this.afs.collection('Treinos_Diarios', ref => {
        // tem dtIni e dtFim
        if (filtro.dtTreinoIni && filtro.dtTreinoFim) {
          filtro.dtTreinoFim.setHours(23, 59, 59, 999);
          return ref.where('idUsuario', '==', idUsuario)
            .orderBy('dtTreino', 'desc')
            .where('dtTreino', '>=', filtro.dtTreinoIni)
            .where('dtTreino', '<=', filtro.dtTreinoFim);
        }
        // tem dtIni e não tem dtFim
        else if (filtro.dtTreinoIni && !filtro.dtTreinoFim) {
          return ref.where('idUsuario', '==', idUsuario)
            .orderBy('dtTreino', 'desc').where('dtTreino', '>=', filtro.dtTreinoIni);
        }
        // não tem dtIni e tem dtFim
        else if (!filtro.dtTreinoIni && filtro.dtTreinoFim) {
          filtro.dtTreinoFim.setHours(23, 59, 59, 999);
          return ref.where('idUsuario', '==', idUsuario)
            .orderBy('dtTreino', 'desc').where('dtTreino', '<=', filtro.dtTreinoFim);
        }
        // não tem dtIni nem dtFim
        else {
          return ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc');
        }
      }).snapshotChanges();
    }
    else {
      return this.afs.collection('Treinos_Diarios', ref => ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc')).snapshotChanges();
    }
  }

  getDadosExPreset(idTreinoPreset: string): Observable<any> {
    return this.afs.collection('Exercicios_Preset', ref => ref.where('idPreset', '==', idTreinoPreset)).snapshotChanges();
  }

  getExerciciosTreino(idTreino: string): Observable<any> {
    return this.afs.collection('Exercicios_Diarios', ref => ref.where('idTreino', '==', idTreino)).snapshotChanges();
  }

  addExercicioDiario(exercicioTreino: any): Promise<any> {
    const exercicio = JSON.parse(JSON.stringify(exercicioTreino));
    delete exercicio.id;
    return this.afs.collection('Exercicios_Diarios').add(exercicio);
  }

  atualizarExercicioDiario(exercicio: any): Promise<void> {
    return this.afs.collection('Exercicios_Diarios').doc(exercicio.id).update(exercicio);
  }

  addTreinoDiario(treinoAtual: TreinoAtual): Promise<any> {
    const treino = JSON.parse(JSON.stringify(treinoAtual));
    delete treino.id;
    treino.dtTreino = new Date(treino.dtTreino);
    return this.afs.collection('Treinos_Diarios').add(treino);
  }

  atualizarTreinoDiario(treinoAtual: any) {
    return this.afs.collection('Treinos_Diarios').doc(treinoAtual.id).update(treinoAtual);
  }

  deletarExerciciosPorTreino(idTreino: string) {
    this.afs.collection('Exercicios_Diarios', ref => ref.where('idTreino', '==', idTreino)).get().subscribe(res => {
      res.forEach(doc => {
        doc.ref.delete();
      });
    });
  }

  deletarTreino(idTreino: string) {
    this.deletarExerciciosPorTreino(idTreino);
    return this.afs.collection('Treinos_Diarios').doc(idTreino).delete();
  }

}
