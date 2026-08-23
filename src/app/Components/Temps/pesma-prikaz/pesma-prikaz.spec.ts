import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesmaPrikaz } from './pesma-prikaz';

describe('PesmaPrikaz', () => {
  let component: PesmaPrikaz;
  let fixture: ComponentFixture<PesmaPrikaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesmaPrikaz],
    }).compileComponents();

    fixture = TestBed.createComponent(PesmaPrikaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
