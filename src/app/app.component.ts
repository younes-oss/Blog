import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './composant/navbar/navbar.component';
import {LoginComponent} from './composant/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
