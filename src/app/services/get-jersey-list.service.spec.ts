import { TestBed, inject } from '@angular/core/testing';

import { GetJerseyListService } from './get-jersey-list.service';

describe('GetJerseyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJerseyListService]
    });
  });

  it('should be created', inject([GetJerseyListService], (service: GetJerseyListService) => {
    expect(service).toBeTruthy();
  }));
});
