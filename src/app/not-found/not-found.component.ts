import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
  constructor(public acitateRoute : ActivatedRoute){}
  

  statusMessage = ""
  ngOnInit(): void {

    this.acitateRoute.data.subscribe((message:any)=>{
      //  console.log(message);
       this.statusMessage =  message[0];

    })
      
  }

}
