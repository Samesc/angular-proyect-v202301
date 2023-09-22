import { Component } from '@angular/core';
import { Delivery } from '../data/delivery';
import { DeliveryService } from '../service/delivery.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDeliveryValidatorService } from '../service/form-delivery-validator.service';
import { DeliveryTrackingService } from '../service/delivery-tracking.service';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css'],
})
export class DeliveryOrderComponent {
  deliveriesSize: Number;
  newDelivery: Delivery;
  resultado!: string;

  protected formDeliveryOrder = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(2),
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(2),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@(gmail.com|outlook.com)$'),
    ]),

    street: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
    avenue: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),
    zone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
    ]),

    departament: new FormControl('', [Validators.required]),

    town: new FormControl('', [Validators.required]),

    description: new FormControl('', [
      Validators.required,
      Validators.minLength(40),
      Validators.maxLength(120),
    ]),
  });

  constructor(
    private deliveryService: DeliveryService,
    private formValidatorService: FormDeliveryValidatorService,
    private delivaryTrackingService: DeliveryTrackingService
  ) {
    this.deliveriesSize = deliveryService.getDeliveriesSize();
    this.newDelivery = new Delivery();
  }

  public saveNewDeliveryOrder() {
    if (this.formDeliveryOrder.valid) {
      this.resultado = 'Formulario correcto';
      this.newDelivery.fullName =
        this.formDeliveryOrder.get('firstName')?.value! +
        ' ' +
        this.formDeliveryOrder.get('lastName')?.value!;

      this.newDelivery.email = this.formDeliveryOrder.get('email')?.value!;

      this.newDelivery.fullAddress =
        this.formDeliveryOrder.get('street')?.value! +
        ' calle, ' +
        this.formDeliveryOrder.get('avenue')?.value! +
        ' Avenida, Zona ' +
        this.formDeliveryOrder.get('zone')?.value! +
        ', ' +
        this.formDeliveryOrder.get('town')?.value! +
        ', ' +
        this.formDeliveryOrder.get('departament')?.value!;

      this.newDelivery.description =
        this.formDeliveryOrder.get('description')?.value!;

      this.delivaryTrackingService.updateStatusDelivery(this.newDelivery);
      this.delivaryTrackingService.generateStringTracking(this.newDelivery);

      this.deliveryService.setNewDelivery(this.newDelivery);

      this.newDelivery = new Delivery();
      this.deliveriesSize = this.deliveryService.getDeliveriesSize();
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }
}
