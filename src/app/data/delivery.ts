import { StatusDelivery } from './status-delivery';

export class Delivery {
  id: number;
  stringTracking: String;
  fullName: String;
  fullAddress: String;
  email: String;
  description: String;
  status: StatusDelivery;

  constructor() {
    this.id = 0;
    this.stringTracking = '';
    this.fullName = '';
    this.fullAddress = '';
    this.email = '';
    this.description = '';
    this.status = StatusDelivery.init;
  }
}
