import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanrBox } from './zanr-box';

describe('ZanrBox', () => {
  let component: ZanrBox;
  let fixture: ComponentFixture<ZanrBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZanrBox],
    }).compileComponents();

    fixture = TestBed.createComponent(ZanrBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
