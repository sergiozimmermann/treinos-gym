import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FiltroTreinos } from '../models/FiltroTreinos';
import { Observable } from 'rxjs';

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

  atualizarExercicioDiario(exercicio: any): Promise<void> {
    return this.afs.collection('Exercicios_Diarios').doc(exercicio.id).update(exercicio);
  }

  atualizarTreinoDiario(treinoAtual: any) {
    return this.afs.collection('Treinos_Diarios').doc(treinoAtual.id).update(treinoAtual);
  }

}
