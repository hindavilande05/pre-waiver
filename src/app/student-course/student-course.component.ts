import { Component, Input, OnInit, inject , HostListener} from '@angular/core';
import { StudentCourseService } from '../services/student-course.service';
import { Course, CourseItem, StudentCourseInfo, StudentProfile, WaiverRequest } from '../models/interfaces';
import { CreditsToStringPipe } from '../pipes/credits-to-string.pipe';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { PreWaiverApplyComponent } from '../pre-waiver-apply/pre-waiver-apply.component';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-student-course',
  standalone: true,
  imports: [NgbAccordionModule, CreditsToStringPipe, CommonModule, NgbTooltipModule],
  providers: [StudentCourseService],
  templateUrl: './student-course.component.html',
})
export class StudentCourseComponent implements OnInit{
  isMobile: boolean = false;
  @Input()studentCourses!: CourseItem[];
  @Input() studentProfile!: StudentProfile;
  private modalService = inject(NgbModal);

  constructor() {
    this.checkScreenSize();
  }
  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Example breakpoint for mobile
  }


  openCourseDetail(course: Course) {
    const modalRef = this.modalService.open(CourseDetailComponent);
    modalRef.componentInstance.courseDetail = course;
  }

  openApplyPreWaiver(courseItem: CourseItem) {
    const modalRef = this.modalService.open(PreWaiverApplyComponent);
    // courseItem.detail.credits = CreditUtils.toString( courseItem.detail.credits)
    
    const request:WaiverRequest = {
      course: courseItem.detail,
      reason: '',
      rollNo: this.studentProfile.rollNo,
      preReqWaiverRequest: true
    };
     
    modalRef.componentInstance.request = request;  
    modalRef.componentInstance.applyWaiver.subscribe(() => {
      this.updateWaiverAppliedStatus(courseItem.detail.code);
    });
  }

  private updateWaiverAppliedStatus(courseCode: string) {
    this.studentCourses.forEach(courseItem => {
      if (courseItem.detail.code === courseCode) {
        courseItem.isWaiverApplied = true;
      }
    });
  }
}
