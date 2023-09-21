import { TestBed } from '@angular/core/testing';

import { SenderEmailService } from './sender-email.service';

describe('SenderEmailService', () => {
  let service: SenderEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
