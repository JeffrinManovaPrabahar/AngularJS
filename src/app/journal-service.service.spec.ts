import { TestBed } from '@angular/core/testing';

import { JournalServiceService } from './journal-service.service';

describe('JournalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalServiceService = TestBed.get(JournalServiceService);
    expect(service).toBeTruthy();
  });
});
