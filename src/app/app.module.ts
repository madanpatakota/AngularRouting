import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrdersComponent } from './orders/orders.component';


//Logic imp 


//order-details/orders

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'order-details', component: OrderDetailsComponent
  },
  {
    path: 'order-details/:orderid', component: OrderDetailsComponent
  },
  { path: 'instructions', component: InstructionsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    OrderDetailsComponent,
    CustomerOrdersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
