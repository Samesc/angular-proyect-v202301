import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDeliveryValidatorService {
  private formDeliveryOrder = new FormGroup({
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
  constructor() {}
}
