import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  imports: [
    BrowserModule, CoreModule, AppRoutingModule, OrdersModule, CustomersModule, SharedModule
  ],
  declarations: [ AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
