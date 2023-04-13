import { TestBed } from '@angular/core/testing';

import { CompanyProfileServiceService } from './company-profile-service.service';

describe('CompanyProfileServiceService', () => {
  let service: CompanyProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
