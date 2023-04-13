import { TestBed } from '@angular/core/testing';

import { AdminApplicationServicesService } from './admin-application-services.service';

describe('AdminApplicationServicesService', () => {
  let service: AdminApplicationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminApplicationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
