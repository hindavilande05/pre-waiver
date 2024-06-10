import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from '../services/student-course.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentInfo } from '../models';
import { CreditsToStringPipe } from '../pipes/credits-to-string.pipe';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-course',
  standalone: true,
  imports: [HttpClientModule, CreditsToStringPipe, CommonModule, NgbTooltipModule],
  providers:[StudentCourseService],
  templateUrl: './student-course.component.html',
  styleUrl: './student-course.component.css'
})
export class StudentCourseComponent implements OnInit {
  studentInfo: StudentInfo = {} as StudentInfo;

  constructor(private courseService: StudentCourseService) { }

  ngOnInit(): void {
    this.courseService.getStudentInfo().subscribe({
      next: (data) => this.studentInfo = data,
      error: (err) => console.error('Failed to load student info', err)
    });
  }
}