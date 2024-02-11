import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  isLogado(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => {
      return !!user;
    }));
  }

}
