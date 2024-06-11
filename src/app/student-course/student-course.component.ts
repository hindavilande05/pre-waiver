import { Component, Input, OnInit, inject } from '@angular/core';
import { StudentCourseService } from '../services/student-course.service';
import { CourseDetail, StudentCourse } from '../models';
import { CreditsToStringPipe } from '../pipes/credits-to-string.pipe';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { PreWaiverApplyComponent } from '../pre-waiver-apply/pre-waiver-apply.component';

@Component({
  selector: 'app-student-course',
  standalone: true,
  imports: [CreditsToStringPipe, CommonModule, NgbTooltipModule],
  providers:[StudentCourseService],
  templateUrl: './student-course.component.html',
})
export class StudentCourseComponent {
  @Input() studentCourses: StudentCourse[] = [];
  private modalService = inject(NgbModal);

	openCourseDetail(course:CourseDetail) {
		const modalRef = this.modalService.open(CourseDetailComponent);
		modalRef.componentInstance.courseDetail = course;
	}

  openApplyPreWaiver() {
		 this.modalService.open(PreWaiverApplyComponent);
	}

}