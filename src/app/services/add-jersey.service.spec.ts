import { TestBed, inject } from '@angular/core/testing';

import { AddJerseyService } from './add-jersey.service';

describe('AddJerseyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddJerseyService]
    });
  });

  it('should be created', inject([AddJerseyService], (service: AddJerseyService) => {
    expect(service).toBeTruthy();
  }));
});
