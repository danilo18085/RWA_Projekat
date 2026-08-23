import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelekcijaTest } from './selekcija-test';

describe('SelekcijaTest', () => {
  let component: SelekcijaTest;
  let fixture: ComponentFixture<SelekcijaTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelekcijaTest],
    }).compileComponents();

    fixture = TestBed.createComponent(SelekcijaTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
