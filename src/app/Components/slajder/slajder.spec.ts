import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slajder } from './slajder';

describe('Slajder', () => {
  let component: Slajder;
  let fixture: ComponentFixture<Slajder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slajder],
    }).compileComponents();

    fixture = TestBed.createComponent(Slajder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
