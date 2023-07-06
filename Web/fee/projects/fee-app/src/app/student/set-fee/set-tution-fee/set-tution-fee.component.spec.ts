import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTutionFeeComponent } from './set-tution-fee.component';

describe('SetTutionFeeComponent', () => {
  let component: SetTutionFeeComponent;
  let fixture: ComponentFixture<SetTutionFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTutionFeeComponent]
    });
    fixture = TestBed.createComponent(SetTutionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
