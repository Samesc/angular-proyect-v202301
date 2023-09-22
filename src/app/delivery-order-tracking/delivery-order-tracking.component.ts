import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Delivery } from '../data/delivery';
import { DeliveryService } from '../service/delivery.service';
import { DeliveryTrackingService } from '../service/delivery-tracking.service';
import { StatusDelivery } from '../data/status-delivery';

@Component({
  selector: 'app-delivery-order-tracking',
  templateUrl: './delivery-order-tracking.component.html',
  styleUrls: ['./delivery-order-tracking.component.css'],
})
export class DeliveryOrderTrackingComponent {
  tempDelivery: Delivery;

  deliveries: Delivery[];
  stringTracking: String;
  protected searchForm = new FormGroup({
    searchInput: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
  });

  constructor(
    private deliveryService: DeliveryService,
    private deliveryTracking: DeliveryTrackingService
  ) {
    this.deliveries = this.deliveryService.getDeliveries();
    this.tempDelivery = new Delivery();
    this.stringTracking = '';
  }

  public searchDelivery() {
    const progressTracking = document.getElementById('progress-bar-tracking');
    if (this.searchForm.valid) {
      this.stringTracking = this.searchForm.get('searchInput')?.value!;

      this.tempDelivery = this.deliveries.find(
        (delivery: Delivery) => delivery.stringTracking == this.stringTracking
      )!;
      if (progressTracking != null) {
        if (this.tempDelivery.status == StatusDelivery.created) {
          progressTracking.style.width = '25%';
        }

        if (this.tempDelivery.status == StatusDelivery.procesing) {
          progressTracking.style.width = '50%';
        }

        if (this.tempDelivery.status == StatusDelivery.inTransit) {
          progressTracking.style.width = '75%';
        }

        if (this.tempDelivery.status == StatusDelivery.delivered) {
          progressTracking.style.width = '100%';
        }

        if (this.tempDelivery.status == StatusDelivery.failure) {
          progressTracking.style.width = '100%';
          progressTracking.classList.add('bg-danger');
        }
      }
      console.log('form correcto', this.tempDelivery);
    } else {
      console.log('form Incorrecto');
    }
  }
}
