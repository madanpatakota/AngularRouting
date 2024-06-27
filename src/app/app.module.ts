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
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { canActivateGuard } from './can-activate.guard';
import { CoreService } from './core.service';
import { candeactivateGuard } from './candeactivate.guard';


//Logic imp 


//order-details/orders

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutusComponent , canDeactivate : [candeactivateGuard]
  },
  {
    path: 'orders', component: OrdersComponent
  },
  {
    path: 'order-details', component: OrderDetailsComponent
  },
  {
    path: 'order-details/:orderid', 
    component: OrderDetailsComponent,
    canActivate : [canActivateGuard],
    canDeactivate : [candeactivateGuard]
  },
  { path: 'instructions', component: InstructionsComponent  , canActivate : [canActivateGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { 
     path: '**',
     component: NotFoundComponent ,
     data : ["Page : 404 not Found"] }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    OrderDetailsComponent,
    CustomerOrdersComponent,
    OrdersComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
