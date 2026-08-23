import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivGornjiMain } from './div-gornji-main';

describe('DivGornjiMain', () => {
  let component: DivGornjiMain;
  let fixture: ComponentFixture<DivGornjiMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivGornjiMain],
    }).compileComponents();

    fixture = TestBed.createComponent(DivGornjiMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
