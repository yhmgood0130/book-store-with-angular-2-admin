import { TestBed, inject } from '@angular/core/testing';

import { RemoveJerseyService } from './remove-jersey.service';

describe('RemoveJerseyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveJerseyService]
    });
  });

  it('should be created', inject([RemoveJerseyService], (service: RemoveJerseyService) => {
    expect(service).toBeTruthy();
  }));
});
