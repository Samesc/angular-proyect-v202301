import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristPageComponent } from './frist-page/frist-page.component';
import { FormsModule } from '@angular/forms';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SenderEmailService } from './service/sender-email.service';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryOrderTrackingComponent } from './delivery-order-tracking/delivery-order-tracking.component';
import { DelivryOrderUpdateStatusComponent } from './delivry-order-update-status/delivry-order-update-status.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryOrderComponent,
  },
  {
    path: 'delivery-order',
    component: DeliveryOrderComponent,
  },

  {
    path: 'delivery-list',
    component: DeliveryListComponent,
  },

  {
    path: 'delivery-tracking',
    component: DeliveryOrderTrackingComponent,
  },

  {
    path: 'delivery-status',
    component: DelivryOrderUpdateStatusComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    FristPageComponent,
    DeliveryOrderComponent,
    DeliveryListComponent,
    DeliveryOrderTrackingComponent,
    DelivryOrderUpdateStatusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [SenderEmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
