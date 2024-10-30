import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrCustomerSubmittedBidsComponent } from './tr-customer-submitted-bids.component';

describe('TrCustomerSubmittedBidsComponent', () => {
  let component: TrCustomerSubmittedBidsComponent;
  let fixture: ComponentFixture<TrCustomerSubmittedBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrCustomerSubmittedBidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrCustomerSubmittedBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
