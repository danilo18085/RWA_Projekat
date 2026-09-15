import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajButton } from './dodaj-button';

describe('DodajButton', () => {
  let component: DodajButton;
  let fixture: ComponentFixture<DodajButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajButton],
    }).compileComponents();

    fixture = TestBed.createComponent(DodajButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
