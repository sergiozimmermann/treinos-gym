import { Component, OnInit } from '@angular/core';
import { TreinosDiariosService } from '../../../../services/treinos-diarios.service';
import { FiltroTreinos } from '../../../../models/FiltroTreinos';
import { UsuarioService } from '../../../../../../shared/services/usuario.service';
import Utils from '../../../../../../Utils/Utils';

@Component({
  selector: 'app-lista-treinos-diarios',
  templateUrl: './lista-treinos-diarios.component.html',
  styleUrls: ['./lista-treinos-diarios.component.scss']
})
export class ListaTreinosDiariosComponent implements OnInit {

  treinosDiarios: any[] = [];

  constructor(private treinoService: TreinosDiariosService
    , private usuarioService: UsuarioService) {
    this.getTreinosDiarios();
  }

  ngOnInit() {
  }

  getTreinosDiarios(filtro?: FiltroTreinos) {
    this.usuarioService.getIdUsuario().then(idUsuario => {
      this.treinoService.getTreinos(idUsuario, filtro).subscribe(res => {
        const resFormatado = Utils.mapResFirebase(res);
        if (filtro && filtro.nmTreino !== '') {
          this.treinosDiarios = resFormatado.filter(treino => treino.nmTreino.toLowerCase().includes(filtro.nmTreino.toLowerCase()));
          return;
        }

        this.treinosDiarios = resFormatado;
      });
    });
  }

}
