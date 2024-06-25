import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AboutusComponent } from './aboutus/aboutus.component';


//Logic imp 
const routes : Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  }
]

// if path is aboutus then show aboutus component
// if path is home then show home component

// ---------
// ------------




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    OrderDetailsComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
