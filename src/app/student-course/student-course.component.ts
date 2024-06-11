import { Component, OnInit, inject } from '@angular/core';
import { StudentCourseService } from '../services/student-course.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetail, StudentInfo } from '../models';
import { CreditsToStringPipe } from '../pipes/credits-to-string.pipe';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@Component({
  selector: 'app-student-course',
  standalone: true,
  imports: [HttpClientModule, CreditsToStringPipe, CommonModule, NgbTooltipModule],
  providers:[StudentCourseService],
  templateUrl: './student-course.component.html',
})
export class StudentCourseComponent implements OnInit {
  studentInfo: StudentInfo = {} as StudentInfo;
  private modalService = inject(NgbModal);

	open(course:CourseDetail) {
		const modalRef = this.modalService.open(CourseDetailComponent);
		modalRef.componentInstance.courseDetail = course;
	}
  constructor(private studentCourseService: StudentCourseService) { }

  ngOnInit(): void {
    this.studentCourseService.getStudentInfo().subscribe({
      next: (data) => this.studentInfo = data,
      error: (err) => console.error('Failed to load student info', err)
    });
  }
}