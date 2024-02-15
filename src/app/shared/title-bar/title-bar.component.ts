import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  titulo: string = ''
  nmUsuario: string = '';

  constructor(private afAuth: AngularFireAuth
    , private location: Location
    , private router: Router) {
    this.getNomeUsuario();

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getTitle();
      }
    });
  }

  ngOnInit() {
  }

  getNomeUsuario() {
    this.afAuth.currentUser.then(user => {
      this.nmUsuario = user?.displayName ?? '';
    });
  }

  getTitle() {
    var title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') {
      title = title.slice(1);
    }
    switch (title) {
      case '/treinos-diarios':
        this.titulo = 'Treinos Diários'
        break;
      case '/treinos-preset':
        this.titulo = 'Treinos Predefinidos'
        break;
      case '/conta':
        this.titulo = 'Conta'
        break;
      default:
        this.titulo = 'Treinos Diários';
    }
  }

}
