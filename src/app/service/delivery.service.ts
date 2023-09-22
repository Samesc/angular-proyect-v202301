import { Injectable } from '@angular/core';
import { Delivery } from '../data/delivery';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private deliveries: Delivery[];
  private numberDelivery: number;
  private date: Date;
  constructor() {
    this.deliveries = [];
    this.date = new Date();
    this.numberDelivery = this.date.getFullYear() * 100000000;
  }

  public getDeliveries() {
    return this.deliveries;
  }

  public setNewDelivery(newDelivery: Delivery) {
    newDelivery.id = this.numberDelivery;
    this.deliveries.push(newDelivery);
    this.numberDelivery++;
  }

  public updateDelivery(delivery: Delivery, indexOf: number) {
    this.deliveries[indexOf] = delivery;
  }

  public getDeliveriesSize() {
    return this.deliveries.length;
  }
}
