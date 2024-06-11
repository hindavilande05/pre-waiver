import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbActiveModal, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonUtils } from '../utils/json-utils';
import { CommonModule } from '@angular/common';
import { WaiverRequest } from '../models/interfaces';

@Component({
  selector: 'app-pre-waiver-apply',
  standalone: true,
  imports: [NgbAlertModule, ReactiveFormsModule, CommonModule],
  templateUrl: './pre-waiver-apply.component.html',
})
export class PreWaiverApplyComponent {
  activeModal = inject(NgbActiveModal);
  @Input() request!: WaiverRequest;
  @Output() applyWaiver = new EventEmitter<void>();


  preWaiverForm!: FormGroup;
  alertMessage = '';
  showAlert = false;

  constructor(private fb: FormBuilder) {
    this.preWaiverForm = this.fb.group({reason: ['']});
  }


  onApply():void {
    this.request.reason = this.preWaiverForm.get('reason')?.value.trim();
    JsonUtils.download(this.request);
    this.showAlertMessage("Application successful!");
    
    this.applyWaiver.emit();        // Emit the apply event
    this.activeModal.close();       // Close the modal
  }


  showAlertMessage(message: string): void {
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);                     // Hide the alert after 3 seconds
  }
}
