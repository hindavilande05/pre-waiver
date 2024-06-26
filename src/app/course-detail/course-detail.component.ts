import { Component, Input, inject } from '@angular/core';
import { Course } from '../models/interfaces';
import { CreditsToStringPipe } from '../pipes/credits-to-string.pipe';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CreditsToStringPipe],
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent {
  @Input() courseDetail: Course = {} as Course
  activeModal = inject(NgbActiveModal);
}
