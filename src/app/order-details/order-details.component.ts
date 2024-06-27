import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { orders } from '../orders.data';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  constructor(public activateRoute: ActivatedRoute) {

  }

  //aboutus , instructions

  //current activaterouter related params subscripe


  //i want to take the subscribe of  routerparams


  orderDetails: any = [];
  orderID = '';

  isParamInURL = false;

  ngOnInit(): void {


    //while component init i am subscribing the what is the current activate route related parameters
    this.activateRoute.params.subscribe((param) => {
      console.log("current param is ", param);
      // {}
      //path: 'order-details/:orderid', component: OrderDetailsComponent
      //param is the object which contains the  { orderid: '10251'} 

      if (param["orderid"]) {
        this.orderID = param["orderid"];
        this.isParamInURL = true;
        // i got the parameter 
        // now i will search the 10251 order  in the orders data..
        this.orderDetails = orders.filter((order) => order.OrderID == +this.orderID);
      }

    })

  }



}
