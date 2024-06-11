import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreWaiverApplyComponent } from './pre-waiver-apply.component';

describe('PreWaiverApplyComponent', () => {
  let component: PreWaiverApplyComponent;
  let fixture: ComponentFixture<PreWaiverApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreWaiverApplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreWaiverApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
