import { Injectable } from '@angular/core';
import { Delivery } from '../data/delivery';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private deliveries: Delivery[];
  constructor() {
    this.deliveries = [];
  }

  public getDeliveries() {
    return this.deliveries;
  }

  public setNewDelivery(newDelivery: Delivery) {
    this.deliveries.push(newDelivery);
  }

  public getDeliveriesSize() {
    return this.deliveries.length;
  }
}
