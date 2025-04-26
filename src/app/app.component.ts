import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './features/navbar/navbar.component';
import {LoginComponent} from './features/login/login.component';
import {HomeComponent} from './features/home/home.component';
<<<<<<< HEAD
import { PostDetailComponent } from './features/posts/post-detail/post-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent,PostDetailComponent],
=======
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent, FooterComponent],
>>>>>>> b5bc2f6 (create footer)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
