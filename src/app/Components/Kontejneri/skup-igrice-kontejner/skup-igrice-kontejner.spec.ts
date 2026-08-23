import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkupIgriceKontejner } from './skup-igrice-kontejner';

describe('SkupIgriceKontejner', () => {
  let component: SkupIgriceKontejner;
  let fixture: ComponentFixture<SkupIgriceKontejner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkupIgriceKontejner],
    }).compileComponents();

    fixture = TestBed.createComponent(SkupIgriceKontejner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
