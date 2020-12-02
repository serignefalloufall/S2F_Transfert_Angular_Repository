import { TestBed } from '@angular/core/testing';

import { EmeteurService } from './emeteur.service';

describe('EmeteurService', () => {
  let service: EmeteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmeteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
