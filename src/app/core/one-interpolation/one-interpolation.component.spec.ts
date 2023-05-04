import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneInterpolationComponent } from './one-interpolation.component';

describe('OneInterpolationComponent', () => {
  let component: OneInterpolationComponent;
  let fixture: ComponentFixture<OneInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
