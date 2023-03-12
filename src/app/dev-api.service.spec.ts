import { TestBed } from '@angular/core/testing';

import { DevAPIService } from './dev-api.service';

describe('DevAPIService', () => {
  let service: DevAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
