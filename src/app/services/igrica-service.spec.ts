import { TestBed } from '@angular/core/testing';

import { IgricaService } from './igrica-service';

describe('IgricaService', () => {
  let service: IgricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
