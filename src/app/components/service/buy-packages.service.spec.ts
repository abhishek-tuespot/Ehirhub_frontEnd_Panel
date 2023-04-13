import { TestBed } from '@angular/core/testing';

import { BuyPackagesService } from './buy-packages.service';

describe('BuyPackagesService', () => {
  let service: BuyPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
