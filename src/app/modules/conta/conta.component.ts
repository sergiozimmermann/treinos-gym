import { Component, OnInit } from '@angular/core';
import { ContaService } from './services/conta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../Utils/services/toast/toast.service';

class Usuario {
  uid?: string;
  nmUsuario?: string;
}

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  formulario!: FormGroup;

  usuarioAuth: any;

  constructor(private contaService: ContaService
    , private formBuilder: FormBuilder
    , private toastService: ToastService) {

    this.formulario = formBuilder.group({
      uid: ['']
      , nmUsuario: ['', [Validators.required]]
    })
    this.getUsuario();
  }

  ngOnInit() {
  }

  getUsuario() {
    this.contaService.getUsuario().then(user => {
      this.usuarioAuth = user;
      let usuario: Usuario = new Usuario();
      usuario.nmUsuario = user.displayName
      usuario.uid = user.uid;

      // Atribui os dados do usuário no formulário
      this.formulario.patchValue(usuario);
    });
  }

  salvarUsuario() {
    // Verifica se foi mexido no input
    if (!this.formulario.touched) {
      this.toastService.showMensagem('Não houve alterações!');
      return;
    }

    if (this.formulario.invalid) {
      this.toastService.showMensagem('Insira seu Nome!');
      return;
    }

    const usuario = this.formulario.getRawValue();
    this.contaService.atualizaUsuario(this.usuarioAuth, usuario).then(() => {
      this.toastService.showMensagem('Salvo com Sucesso!');

      // Reinicia a janela para reobter o nome do usuário no title-bar
      window.location.reload();
    }).catch(() => {
      this.toastService.showMensagem('Ocorreu um erro!');
    });
  }

}
