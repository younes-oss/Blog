import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {routes} from '../../../app.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router);


  constructor(private firebaseAuth: Auth) {

  }

  login(email: string, password: string): void {
   signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((success  : any)  => {

      localStorage.setItem('login',"true" );

      console.log(`Login successful`+success);

      this.router.navigate(['/Dashboard']);

      //
    } ,
      error => {

      console.log(error);
      });

  }
}
