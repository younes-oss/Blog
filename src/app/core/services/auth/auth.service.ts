import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firebaseAuth: Auth) {}

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      signInWithEmailAndPassword(this.firebaseAuth, email, password)
        .then((success) => {
          localStorage.setItem('login', "true");
          console.log('Login successful', success);
          observer.next(true); // Emit true on success
          observer.complete();
        })
        .catch((error) => {
          console.error('Login failed', error);
          observer.next(false); // Emit false on error
          observer.complete();
        });
    });
  }
}
