import { Component } from '@angular/core';
import { Delivery } from '../data/delivery';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css'],
})
export class DeliveryListComponent {
  deliveries: Delivery[];

  constructor(private deliveryService: DeliveryService) {
    this.deliveries = this.deliveryService.getDeliveries();
  }
}
