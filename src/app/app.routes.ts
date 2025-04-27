import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {LoginComponent} from './features/login/login.component';
import {PostDetailComponent} from './features/posts/post-detail/post-detail.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {authGuardGuard} from './core/guards/auth-guard.guard';
import {loginGuardGuard} from './core/guards/login-guard.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: PostDetailComponent },
  { path: 'login', component: LoginComponent , canActivate : [loginGuardGuard]  },
  { path: 'Dashboard', component: DashboardComponent , canActivate: [authGuardGuard] },


];
