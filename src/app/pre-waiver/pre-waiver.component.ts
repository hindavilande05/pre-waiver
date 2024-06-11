import { Component } from '@angular/core';
import { StudentCourseComponent } from '../student-course/student-course.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@Component({
  selector: 'app-pre-waiver',
  standalone: true,
  imports: [StudentCourseComponent, CourseDetailComponent],
  templateUrl: './pre-waiver.component.html',
  styleUrl: './pre-waiver.component.css'
})
export class PreWaiverComponent {

}
