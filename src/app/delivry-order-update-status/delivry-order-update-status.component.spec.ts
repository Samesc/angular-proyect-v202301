import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivryOrderUpdateStatusComponent } from './delivry-order-update-status.component';

describe('DelivryOrderUpdateStatusComponent', () => {
  let component: DelivryOrderUpdateStatusComponent;
  let fixture: ComponentFixture<DelivryOrderUpdateStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelivryOrderUpdateStatusComponent]
    });
    fixture = TestBed.createComponent(DelivryOrderUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
