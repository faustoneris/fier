import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrSupplierReceivedBidsComponent } from './tr-supplier-received-bids.component';

describe('TrSupplierReceivedBidsComponent', () => {
  let component: TrSupplierReceivedBidsComponent;
  let fixture: ComponentFixture<TrSupplierReceivedBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrSupplierReceivedBidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrSupplierReceivedBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
