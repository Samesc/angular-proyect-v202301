import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOrderTrackingComponent } from './delivery-order-tracking.component';

describe('DeliveryOrderTrackingComponent', () => {
  let component: DeliveryOrderTrackingComponent;
  let fixture: ComponentFixture<DeliveryOrderTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryOrderTrackingComponent]
    });
    fixture = TestBed.createComponent(DeliveryOrderTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
