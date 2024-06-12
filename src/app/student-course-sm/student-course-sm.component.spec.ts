import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseSmComponent } from './student-course-sm.component';

describe('StudentCourseSmComponent', () => {
  let component: StudentCourseSmComponent;
  let fixture: ComponentFixture<StudentCourseSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCourseSmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCourseSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
