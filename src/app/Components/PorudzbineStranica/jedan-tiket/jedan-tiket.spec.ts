import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedanTiket } from './jedan-tiket';

describe('JedanTiket', () => {
  let component: JedanTiket;
  let fixture: ComponentFixture<JedanTiket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JedanTiket],
    }).compileComponents();

    fixture = TestBed.createComponent(JedanTiket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
