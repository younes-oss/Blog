import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './features/navbar/navbar.component';
import {LoginComponent} from './features/login/login.component';
import {HomeComponent} from './features/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
