import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAdmissionFeeComponent } from './set-admission-fee.component';

describe('SetAdmissionFeeComponent', () => {
  let component: SetAdmissionFeeComponent;
  let fixture: ComponentFixture<SetAdmissionFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetAdmissionFeeComponent]
    });
    fixture = TestBed.createComponent(SetAdmissionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
