import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbAlert, NgbAlertModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetail, PrerequisiteApplyRequest, StudentInfo } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonUtils } from '../utils/json-utils';
@Component({
  selector: 'app-pre-waiver-apply',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './pre-waiver-apply.component.html',
  styleUrl: './pre-waiver-apply.component.css'
})
export class PreWaiverApplyComponent {
  activeModal = inject(NgbActiveModal);
  preWaiverForm!: FormGroup
  alertMessage=''
  showAlert:boolean = false

  constructor(private fb: FormBuilder){
    this.buildApprovalForm()
  }
  
  applyForPrerequisiteWaiver(student: StudentInfo, course: CourseDetail, reason: string):void {
    const request = {
        student,
        course,
        prerequisiteWaiverRequest: true,
        reason,
    };
    JsonUtils.download(request)
    this.showAlertMessage("Application successfull!")
  }

 private buildApprovalForm() {
    this.preWaiverForm = this.fb.group({
      reason: ['']
    });
  }
  showAlertMessage(message: string): void {
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000); // Hide the alert after 3 seconds
  }

}
