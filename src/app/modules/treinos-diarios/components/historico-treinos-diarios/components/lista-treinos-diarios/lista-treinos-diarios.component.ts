import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TreinosDiariosService } from '../../../../services/treinos-diarios.service';
import { FiltroTreinos } from '../../../../models/FiltroTreinos';
import { UsuarioService } from '../../../../../../shared/services/usuario.service';
import Utils from '../../../../../../Utils/Utils';
import { ToastService } from '../../../../../../Utils/services/toast/toast.service';

@Component({
  selector: 'app-lista-treinos-diarios',
  templateUrl: './lista-treinos-diarios.component.html',
  styleUrls: ['./lista-treinos-diarios.component.scss']
})
export class ListaTreinosDiariosComponent implements OnInit {

  treinosDiarios: any[] = [];

  @Output() onSelecionarTreino = new EventEmitter();

  constructor(private treinoService: TreinosDiariosService
    , private usuarioService: UsuarioService
    , private toastService: ToastService) {
    this.getTreinosDiarios();
  }

  ngOnInit() {
  }

  getTreinosDiarios(filtro?: FiltroTreinos) {
    this.usuarioService.getIdUsuario().then(idUsuario => {
      // Filtra baseado no id do Usuário
      this.treinoService.getTreinos(idUsuario, filtro).subscribe(res => {
        const resFormatado = Utils.mapResFirebase(res);
        resFormatado.map(treino => treino.dtTreino = new Date(treino.dtTreino.seconds * 1000));
        // Verifica se está filtrando por nome do treino
        if (filtro && filtro.nmTreino !== '') {
          // Ignora letras maiúsculas na hora de filtrar
          this.treinosDiarios = resFormatado.filter(treino => treino.nmTreino.toLowerCase().includes(filtro.nmTreino.toLowerCase()));
          return;
        }

        this.treinosDiarios = resFormatado;
      });
    });
  }

  deletarTreino(idTreino: string) {
    this.treinoService.deletarTreino(idTreino).then(() => {
      this.toastService.showMensagem('Deletado com sucesso!');
    }).catch(() => {
      this.toastService.showMensagem('Ocorreu um erro!');
    });
  }

}
