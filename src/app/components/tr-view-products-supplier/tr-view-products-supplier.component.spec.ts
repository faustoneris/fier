import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrViewProductsSupplierComponent } from './tr-view-products-supplier.component';

describe('TrViewProductsSupplierComponent', () => {
  let component: TrViewProductsSupplierComponent;
  let fixture: ComponentFixture<TrViewProductsSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrViewProductsSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrViewProductsSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
