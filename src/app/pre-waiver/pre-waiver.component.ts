import { Component, OnInit , HostListener, TemplateRef, inject} from '@angular/core';
import { StudentCourseComponent } from '../student-course/student-course.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentCourseService } from '../services/student-course.service';
import { StudentCourseInfo, StudentProfile } from '../models/interfaces';



import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export enum ViewCourse {
  CORE_COURSES,
  ELECTIVE_COURSES,
  UPCOMING_SEMESTER_COURSES
}

@Component({
  selector: 'app-pre-waiver',
  standalone: true,
  imports: [HttpClientModule, StudentCourseComponent, CourseDetailComponent, NgbDatepickerModule],
  providers: [StudentCourseService],
  templateUrl: './pre-waiver.component.html',
  styleUrls: ['./pre-waiver.component.css']
})
export class PreWaiverComponent implements OnInit {

  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	
  isMobile: boolean = false;
  ViewCourse = ViewCourse;
  viewCourse!: ViewCourse;
  studentProfile:StudentProfile = {} as StudentProfile
  studentInfo: StudentCourseInfo = {} as StudentCourseInfo;

  cardOpened: { [key in ViewCourse]?: boolean } = {
    [ViewCourse.CORE_COURSES]: false,
    [ViewCourse.ELECTIVE_COURSES]: false,
    [ViewCourse.UPCOMING_SEMESTER_COURSES]: false

  };

  
  constructor(private studentCourseService: StudentCourseService) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Example breakpoint for mobile
  }




  ngOnInit(): void {
    this.studentCourseService.getStudentInfo().subscribe({
      next: (data) => {
        this.studentInfo = data;
        this.studentProfile = {rollNo: data.rollNo, name:data.name, program:data.program, semester: data.semester, branch:data.branch}
      },
      error: (err) => console.error('Failed to load student info', err)
    });
  }

  setView(view: ViewCourse) {
    for (let key in this.cardOpened) {
      if (this.cardOpened.hasOwnProperty(key)) {
        this.cardOpened[key as unknown as ViewCourse] = false;
      }
    }
    this.cardOpened[view] = true;
    this.viewCourse = view;
  }

  open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed`;
			},
		);
	}

}
