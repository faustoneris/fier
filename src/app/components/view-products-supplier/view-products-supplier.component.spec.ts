import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsSupplierComponent } from './view-products-supplier.component';

describe('ViewProductsSupplierComponent', () => {
  let component: ViewProductsSupplierComponent;
  let fixture: ComponentFixture<ViewProductsSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductsSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewProductsSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
