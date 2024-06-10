import { Component } from '@angular/core';
import { StudentCourseComponent } from '../student-course/student-course.component';

@Component({
  selector: 'app-pre-waiver',
  standalone: true,
  imports: [StudentCourseComponent],
  templateUrl: './pre-waiver.component.html',
  styleUrl: './pre-waiver.component.css'
})
export class PreWaiverComponent {

}
