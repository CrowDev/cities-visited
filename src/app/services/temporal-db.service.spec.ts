import { TestBed } from '@angular/core/testing';

import { TemporalDbService } from './temporal-db.service';

describe('TemporalDbService', () => {
  let service: TemporalDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporalDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
