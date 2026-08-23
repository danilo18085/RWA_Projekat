import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivDonjiMain } from './div-donji-main';

describe('DivDonjiMain', () => {
  let component: DivDonjiMain;
  let fixture: ComponentFixture<DivDonjiMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivDonjiMain],
    }).compileComponents();

    fixture = TestBed.createComponent(DivDonjiMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
