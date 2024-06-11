import { Component, OnInit } from '@angular/core';
import { StudentCourseComponent } from '../student-course/student-course.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentCourseService } from '../services/student-course.service';
import { StudentInfo } from '../models';

export enum ViewCourse{
  CORE_COURSES, ELECTIVE_COURSES, UPCOMING_SEMESTER_COURSES
}

@Component({
  selector: 'app-pre-waiver',
  standalone: true,
  imports: [HttpClientModule, StudentCourseComponent, CourseDetailComponent],
  providers: [StudentCourseService],
  templateUrl: './pre-waiver.component.html',
  styleUrl: './pre-waiver.component.css'
})
export class PreWaiverComponent implements OnInit {
  ViewCourse = ViewCourse
  viewCourse!:ViewCourse
  studentInfo:StudentInfo = {} as StudentInfo
 // Use enum values as keys for cardOpened
 cardOpened: { [key in ViewCourse]?: boolean } = {
  [ViewCourse.CORE_COURSES]: false,
  [ViewCourse.ELECTIVE_COURSES]: false,
  [ViewCourse.UPCOMING_SEMESTER_COURSES]: false
};

  constructor(private studentInfoService: StudentCourseService){}
  ngOnInit(): void {
    this.studentInfoService.getStudentInfo().subscribe({
      next: (data) => this.studentInfo = data,
      error: (err) => console.error('Failed to load student info', err)
    });
  }
   // Function to toggle the card state
   setView(view: ViewCourse) {
    // Close all cards first
    for (let key in this.cardOpened) {
      if (this.cardOpened.hasOwnProperty(key)) {
        this.cardOpened[key as unknown as ViewCourse] = false;
      }
    }
    // Open the selected card
    this.cardOpened[view] = true;
    this.viewCourse = view;
  }
}
