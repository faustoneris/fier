import { TestBed } from '@angular/core/testing';

import { SuppliersProductService } from './suppliers-product.service';

describe('SuppliersProductService', () => {
  let service: SuppliersProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
