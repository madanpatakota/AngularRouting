import { Component, OnInit } from '@angular/core';
import { Order, orders } from '../orders.data';
import { Customer, customers } from '../customers.data';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {



  ordersWithDetails: any[] = [];



  //abc  = []

  //undefind.customerName // exception

  ngOnInit(): void {


    orders.forEach((order : Order) => {

     // 'adfasjdfahbfasvdfasdfasbfdavsfdva'
      // if (order.CustomerID == 'COMMI') {
        const customer:Customer | undefined = 
                       customers.find((customer) => customer.CustomerID == order.CustomerID);


        //now you can see the 
        console.log(customer?.ContactName);


        this.ordersWithDetails.push(
          {
            'OrderId'       : order.OrderID,
            'CustomerName'  : customer?.ContactName,
            'OrderDate'     : order.OrderDate,
            'ShipName'      : order.ShipName,
            'ShipAddress'   : order.ShipAddress
          }
        )

        //i need to get the orderdata , shipaddress , ship
        // plan : Order ID	Order Date	Ship Name	Ship Address from order data
        //        CustomerName from customer data



      //}
    })


    console.log(this.ordersWithDetails);
    //
    //I want to get the customerName whose id equals to COMMI
    //A : Pedro Afonso


    //console.log(orders);

  }
}
