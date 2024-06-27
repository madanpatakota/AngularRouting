import { CanDeactivateFn } from '@angular/router';

export const candeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  const status = window.confirm("Do you want  navigate to the different page?");
  if(status){
     return true;
  }
  else{
     return false;
  }

};
