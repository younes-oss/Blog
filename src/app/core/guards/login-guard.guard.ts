import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('login') == null) {
    return true;
  } else {
    router.navigate(['/Dashboard']); // <-- redirect to login
    return false;
  }};
