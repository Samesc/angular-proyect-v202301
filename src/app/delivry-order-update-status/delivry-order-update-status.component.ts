import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Delivery } from '../data/delivery';
import { DeliveryService } from '../service/delivery.service';
import { DeliveryTrackingService } from '../service/delivery-tracking.service';
import { StatusDelivery } from '../data/status-delivery';

@Component({
  selector: 'app-delivry-order-update-status',
  templateUrl: './delivry-order-update-status.component.html',
  styleUrls: ['./delivry-order-update-status.component.css'],
})
export class DelivryOrderUpdateStatusComponent {
  tempDelivery: Delivery;
  deliveries: Delivery[];
  numberDelivery: number;
  resultado!: string;
  isEnable: boolean;
  isEnableFailure: boolean;
  tempDeliveryIndex: number;
  dateUpdate: Date;

  protected searchForm = new FormGroup({
    searchInput: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
  });
  protected formDeliveryOrderUpdate = new FormGroup({
    infoPerson: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(2),
    ]),

    comment: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(40),
    ]),
  });

  constructor(
    private deliveryService: DeliveryService,
    private deliveryTracking: DeliveryTrackingService
  ) {
    this.numberDelivery = 0;
    this.deliveries = this.deliveryService.getDeliveries();
    this.tempDelivery = new Delivery();
    this.isEnable = true;
    this.isEnableFailure = true;
    this.tempDeliveryIndex = -1;
    this.dateUpdate = new Date();
  }

  public searchDelivery() {
    if (this.searchForm.valid) {
      this.numberDelivery = parseInt(
        this.searchForm.get('searchInput')?.value!
      );
      this.tempDelivery = this.deliveries.find(
        (delivery: Delivery) => delivery.id == this.numberDelivery
      )!;

      if (
        this.tempDelivery &&
        this.tempDelivery.status != StatusDelivery.failure &&
        this.tempDelivery.status != StatusDelivery.delivered
      ) {
        this.formDeliveryOrderUpdate.get('infoPerson')?.enable();
        this.formDeliveryOrderUpdate.get('comment')?.enable();
        this.isEnable = false;
        if (this.tempDelivery.status == StatusDelivery.created) {
          this.isEnableFailure = true;
        } else {
          this.isEnableFailure = false;
        }
        this.tempDeliveryIndex = this.deliveries.indexOf(this.tempDelivery);
      } else {
        this.formDeliveryOrderUpdate.get('infoPerson')?.disable();
        this.formDeliveryOrderUpdate.get('comment')?.disable();
        this.isEnable = true;
        this.isEnableFailure = true;
        this.tempDeliveryIndex = -1;
      }
    } else {
      console.log('error');
    }
  }
  public updateOrder() {
    if (this.formDeliveryOrderUpdate.valid) {
      this.resultado = 'Formulario correcto';
      this.tempDelivery.dateUpdate.push(new Date());
      this.tempDelivery.commentUpdate.push(
        this.formDeliveryOrderUpdate.get('comment')?.value!
      );
      this.tempDelivery.personInfo.push(
        this.formDeliveryOrderUpdate.get('infoPerson')?.value!
      );

      this.deliveryTracking.updateStatusDelivery(this.tempDelivery);
      this.deliveryService.updateDelivery(
        this.tempDelivery,
        this.tempDeliveryIndex
      );
      if (this.tempDelivery.status == StatusDelivery.delivered) {
        this.isEnableFailure = true;
        this.isEnable = true;
      } else if (this.tempDelivery.status == StatusDelivery.created) {
        this.isEnableFailure = true;
      } else {
        this.isEnableFailure = false;
      }
    } else {
      this.resultado = 'Formulario incorrecto';
    }
  }
  public failureOrder() {
    if (this.formDeliveryOrderUpdate.valid) {
      if (this.tempDelivery.status != StatusDelivery.created) {
        if (this.tempDelivery.status == StatusDelivery.procesing) {
          this.tempDelivery.dateUpdate.push(new Date());
          this.tempDelivery.commentUpdate.push('');
          this.tempDelivery.personInfo.push('');
        }
        this.tempDelivery.dateUpdate.push(new Date());
        this.tempDelivery.commentUpdate.push(
          this.formDeliveryOrderUpdate.get('comment')?.value!
        );
        this.tempDelivery.personInfo.push(
          this.formDeliveryOrderUpdate.get('infoPerson')?.value!
        );
        this.deliveryTracking.failureStatusDelivery(this.tempDelivery);
        this.deliveryService.updateDelivery(
          this.tempDelivery,
          this.tempDeliveryIndex
        );
        this.formDeliveryOrderUpdate.get('infoPerson')?.disable();
        this.formDeliveryOrderUpdate.get('comment')?.disable();
        this.isEnable = true;
        this.isEnableFailure = true;
        this.tempDeliveryIndex = -1;
      }
    } else {
      this.resultado = 'Formulario incorrecto';
    }
  }
}
