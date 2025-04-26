import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private firebaseAuth: Auth) {

  }

  login(email: string, password: string): boolean {
   signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((success  : any)  => {

      localStorage.setItem('login',"true" );

      console.log(`Login successful`+success);
      return true;
      //
    } ,
      error => {

      console.log(error);
      });
    return false;

  }
}
