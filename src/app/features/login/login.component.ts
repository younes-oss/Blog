import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { ToastComponent } from '../../shared/toast/toast.component';

@Component({
  selector: 'app-login',
  standalone: true, // Ensures it's a standalone component
  imports: [FormsModule, ToastComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  router = inject(Router);
  authservice: AuthService = inject(AuthService);

  message: string = "";
  color: string = '';
  show: string = '';

  // Login method that subscribes to the AuthService observable
  Login() {
    this.authservice.login(this.email, this.password).subscribe({
      next: (success) => {
        if (success) {
          this.color = "green";
          this.message = "Login successful!";
          this.showSnackbar();
          this.router.navigate(['/Dashboard']);
        } else {
          this.color = "red";
          this.message = "Wrong password or email!";
          this.showSnackbar();
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.color = "red";
        this.message = "An error occurred during login!";
        this.showSnackbar();
      }
    });
  }


  showSnackbar() {
    this.show = "block"; // Display the snackbar

    // After 3 seconds, hide the snackbar
    setTimeout(() => {
      this.show = "none";
    }, 3000);
  }
}
