import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetstudentFeeComponent } from './setstudent-fee.component';

describe('SetstudentFeeComponent', () => {
  let component: SetstudentFeeComponent;
  let fixture: ComponentFixture<SetstudentFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetstudentFeeComponent]
    });
    fixture = TestBed.createComponent(SetstudentFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
