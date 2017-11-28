import { TestBed, inject } from '@angular/core/testing';

import { EditJerseyService } from './edit-jersey.service';

describe('EditJerseyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditJerseyService]
    });
  });

  it('should be created', inject([EditJerseyService], (service: EditJerseyService) => {
    expect(service).toBeTruthy();
  }));
});
