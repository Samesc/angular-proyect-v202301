import { TestBed } from '@angular/core/testing';

import { FormDeliveryValidatorService } from './form-delivery-validator.service';

describe('FormDeliveryValidatorService', () => {
  let service: FormDeliveryValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDeliveryValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
