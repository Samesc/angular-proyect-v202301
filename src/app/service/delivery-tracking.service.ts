import { Injectable } from '@angular/core';
import { DeliveryTrack } from '../data/delivery-track';
import { Delivery } from '../data/delivery';
import { StatusDelivery } from '../data/status-delivery';

@Injectable({
  providedIn: 'root',
})
export class DeliveryTrackingService {
  private deliveryTrack = DeliveryTrack;
  constructor() {}

  public updateStatusDelivery(delivery: Delivery) {
    if (delivery.status == StatusDelivery.init) {
      delivery.status = StatusDelivery.created;
    } else if (delivery.status == StatusDelivery.created) {
      delivery.status = StatusDelivery.procesing;
    } else if (delivery.status == StatusDelivery.procesing) {
      delivery.status = StatusDelivery.inTransit;
    } else if (delivery.status == StatusDelivery.inTransit) {
      delivery.status = StatusDelivery.delivered;
    } else {
      delivery.status = StatusDelivery.delivered;
    }
  }

  public failureStatusDelivery(delivery: Delivery) {
    if (
      delivery.status != StatusDelivery.created &&
      delivery.status != StatusDelivery.init
    ) {
      delivery.status = StatusDelivery.failure;
    }
  }

  public generateStringTracking(delivery: Delivery) {
    const characters = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM';
    var stringTracking = '';
    for (let i = 0; i < 12; i++) {
      stringTracking += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    delivery.stringTracking = stringTracking;
  }
}
