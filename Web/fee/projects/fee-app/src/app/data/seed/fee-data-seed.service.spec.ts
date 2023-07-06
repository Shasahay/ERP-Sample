import { TestBed } from '@angular/core/testing';

import { FeeDataSeedService } from './fee-data-seed.service';

describe('FeeDataSeedService', () => {
  let service: FeeDataSeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeDataSeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
