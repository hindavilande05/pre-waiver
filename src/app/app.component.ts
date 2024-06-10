import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCourseComponent } from './student-course/student-course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentCourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pre-waiver';
}
