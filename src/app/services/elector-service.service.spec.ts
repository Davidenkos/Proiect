import { TestBed } from '@angular/core/testing';

import { ElectorServiceService } from './elector-service.service';

describe('ElectorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectorServiceService = TestBed.get(ElectorServiceService);
    expect(service).toBeTruthy();
  });
});
