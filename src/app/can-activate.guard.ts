import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

//Router helps us to navigate to the your desired path

export const canActivateGuard: CanActivateFn = (route, state) => {
  const userName = localStorage.getItem('username');
  const router = inject(Router);
  if(userName != null || userName != undefined ){
    return true;
  }
  else{
    router.navigate(['./login']);
    return false;
     //-----------------------------; navigate to the login
  }
};
