import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReceivedBidsComponent } from './supplier-received-bids.component';

describe('SupplierReceivedBidsComponent', () => {
  let component: SupplierReceivedBidsComponent;
  let fixture: ComponentFixture<SupplierReceivedBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierReceivedBidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierReceivedBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
