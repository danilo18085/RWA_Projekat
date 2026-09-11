import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementUKorpi } from './element-u-korpi';

describe('ElementUKorpi', () => {
  let component: ElementUKorpi;
  let fixture: ComponentFixture<ElementUKorpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementUKorpi],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementUKorpi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
