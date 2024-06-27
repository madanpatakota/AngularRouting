import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CoreService } from '../core.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(public router:Router , public coreService:CoreService){}

  evtClick(userName: HTMLInputElement){
    
    const user = userName.value;

    localStorage.setItem('username', user);

    //here event emitter is giving the updates
    this.coreService.eventEmitter.emit(user);

    this.router.navigate(['./orders']);

  }
}
