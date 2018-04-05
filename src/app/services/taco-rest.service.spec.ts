import { TestBed, inject } from '@angular/core/testing';

import { TacoRestService } from './taco-rest.service';

describe('TacoRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacoRestService]
    });
  });

  it('should be created', inject([TacoRestService], (service: TacoRestService) => {
    expect(service).toBeTruthy();
  }));
});
