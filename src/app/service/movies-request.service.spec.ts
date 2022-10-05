import { TestBed } from '@angular/core/testing';

import { MoviesRequestService } from './movies-request.service';

describe('MoviesRequestService', () => {
  let service: MoviesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
