import { TestBed } from '@angular/core/testing';

import { GeneratorID } from './generator-id';

describe('GeneratorID', () => {
  let service: GeneratorID;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorID);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
