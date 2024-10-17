import { TestBed } from '@angular/core/testing';

import { CustomersFeedbackService } from './customers-feedback.service';

describe('CustomersFeedbackService', () => {
  let service: CustomersFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
