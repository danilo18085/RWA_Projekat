import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Igrica } from './igrica';

describe('Igrica', () => {
  let component: Igrica;
  let fixture: ComponentFixture<Igrica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Igrica],
    }).compileComponents();

    fixture = TestBed.createComponent(Igrica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
