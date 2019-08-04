import { TestBed, inject } from '@angular/core/testing';

import { PrevRouteService } from './prev-route.service';

describe('PrevRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrevRouteService]
    });
  });

  it('should be created', inject([PrevRouteService], (service: PrevRouteService) => {
    expect(service).toBeTruthy();
  }));
});
