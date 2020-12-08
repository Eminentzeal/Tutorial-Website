import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularCourseComponent } from './particular-course.component';

describe('ParticularCourseComponent', () => {
  let component: ParticularCourseComponent;
  let fixture: ComponentFixture<ParticularCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
