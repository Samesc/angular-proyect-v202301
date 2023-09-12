import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristPageComponent } from './frist-page/frist-page.component';
import { FormsModule } from '@angular/forms';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';

@NgModule({
  declarations: [AppComponent, FristPageComponent, DeliveryOrderComponent, DeliveryListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
