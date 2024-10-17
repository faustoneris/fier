import { TestBed } from '@angular/core/testing';

import { CustomersProductService } from './customers-product.service';

describe('CustomersProductService', () => {
  let service: CustomersProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
