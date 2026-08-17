import { TestBed } from '@angular/core/testing';

import { Nekiservis } from './nekiservis';

describe('Nekiservis', () => {
  let service: Nekiservis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nekiservis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
