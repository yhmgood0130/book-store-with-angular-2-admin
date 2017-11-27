import { TestBed, inject } from '@angular/core/testing';

import { GetJerseyService } from './get-jersey.service';

describe('GetJerseyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJerseyService]
    });
  });

  it('should be created', inject([GetJerseyService], (service: GetJerseyService) => {
    expect(service).toBeTruthy();
  }));
});
