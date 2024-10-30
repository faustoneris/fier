import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubmittedBidsComponent } from './customer-submitted-bids.component';

describe('CustomerSubmittedBidsComponent', () => {
  let component: CustomerSubmittedBidsComponent;
  let fixture: ComponentFixture<CustomerSubmittedBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSubmittedBidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSubmittedBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
