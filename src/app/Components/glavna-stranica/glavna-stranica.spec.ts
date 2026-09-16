import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavnaStranica } from './glavna-stranica';

describe('GlavnaStranica', () => {
  let component: GlavnaStranica;
  let fixture: ComponentFixture<GlavnaStranica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlavnaStranica],
    }).compileComponents();

    fixture = TestBed.createComponent(GlavnaStranica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
