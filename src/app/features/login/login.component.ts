import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Ensures it's a standalone component
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private  router: Router) {
  }

  authservice : AuthService=inject(AuthService);

  Login() {
    this.authservice.login(this.email, this.password).subscribe((succes)=>{
      console.log('login successful');
      this.router.navigate(['/Dashboard']);

    } ,  error => {
      console.log(error);
    })

  }
}
