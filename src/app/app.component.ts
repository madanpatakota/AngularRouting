import { Component , OnInit } from '@angular/core';
import { CoreService } from './core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';


  constructor(public coreService : CoreService){}


  userName : any;
  ngOnInit(): void {
     this.userName =  localStorage.getItem("username");


     //here i am subscribing of the eventemitter
     this.coreService.eventEmitter.subscribe((data)=>{
        // console.log(data);
         this.userName = data;
     })

  }




}
