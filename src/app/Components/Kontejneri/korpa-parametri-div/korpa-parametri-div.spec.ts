import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorpaParametriDiv } from './korpa-parametri-div';

describe('KorpaParametriDiv', () => {
  let component: KorpaParametriDiv;
  let fixture: ComponentFixture<KorpaParametriDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KorpaParametriDiv],
    }).compileComponents();

    fixture = TestBed.createComponent(KorpaParametriDiv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
