import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FiltroTreinos } from '../models/FiltroTreinos';

@Injectable({
  providedIn: 'root'
})
export class TreinosDiariosService {

  constructor(private afs: AngularFirestore) { }

  getTreinos(idUsuario: string, filtro: FiltroTreinos) {
    if (filtro) {
      this.afs.collection('Treinos_Diarios', ref => {
        // tem dtIni e dtFim
        if (filtro.dtTreinoIni && filtro.dtTreinoFim) {
          return ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc').where('nmTreino', '>=', filtro.nmTreino).where('nmTreino', '<=', filtro.nmTreino + '\uf8ff')
            .where('dtTreino', '>=', filtro.dtTreinoIni)
            .where('dtTreino', '<=', filtro.dtTreinoFim)
        }
        // tem dtIni e não tem dtFim
        else if (filtro.dtTreinoIni && !filtro.dtTreinoFim) {
          return ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc').where('nmTreino', '>=', filtro.nmTreino).where('nmTreino', '<=', filtro.nmTreino + '\uf8ff')
            .where('dtTreino', '>=', filtro.dtTreinoIni)
        }
        // não tem dtIni e tem dtFim
        else if (!filtro.dtTreinoIni && filtro.dtTreinoFim) {
          return ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc').where('nmTreino', '>=', filtro.nmTreino).where('nmTreino', '<=', filtro.nmTreino + '\uf8ff')
            .where('dtTreino', '<=', filtro.dtTreinoFim)
        }
        // não tem dtIni nem dtFim
        else {
          return ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc').where('nmTreino', '>=', filtro.nmTreino).where('nmTreino', '<=', filtro.nmTreino + '\uf8ff');
        }
      }).snapshotChanges();
    }
    else {
      this.afs.collection('Treinos_Diarios', ref => ref.where('idUsuario', '==', idUsuario).orderBy('dtTreino', 'desc')).snapshotChanges();
    }
  }

}
