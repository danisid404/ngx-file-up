import { TestBed } from '@angular/core/testing';

import { NgxFileUpService } from './ngx-file-up.service';

describe('NgxFileUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFileUpService = TestBed.get(NgxFileUpService);
    expect(service).toBeTruthy();
  });
});
