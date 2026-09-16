import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkupTiketa } from './skup-tiketa';

describe('SkupTiketa', () => {
  let component: SkupTiketa;
  let fixture: ComponentFixture<SkupTiketa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkupTiketa],
    }).compileComponents();

    fixture = TestBed.createComponent(SkupTiketa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
