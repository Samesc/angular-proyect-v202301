export class DeliveryTrack {
  dateUpdateDelivery: Date;
  coment: String;
  deliveryNumberTracking: String;
  constructor() {
    this.dateUpdateDelivery = new Date();
    this.coment = '';
    this.deliveryNumberTracking = '';
  }
}
