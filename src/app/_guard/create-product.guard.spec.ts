import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { createProductGuard } from './create-product.guard';

describe('createProductGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => createProductGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
