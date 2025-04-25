import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private firebaseAuth: Auth) {

  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((success  : any)  => {

      console.log(`Login successful`+success);
      //
    } ,
      error => {
      console.log(error);
      });
    return from(promise);
  }
}
