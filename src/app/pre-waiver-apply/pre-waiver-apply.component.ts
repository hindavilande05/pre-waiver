import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-pre-waiver-apply',
  standalone: true,
  imports: [],
  templateUrl: './pre-waiver-apply.component.html',
  styleUrl: './pre-waiver-apply.component.css'
})
export class PreWaiverApplyComponent {
  activeModal = inject(NgbActiveModal);
}
