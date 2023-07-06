import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSessionFeeComponent } from './set-session-fee.component';

describe('SetSessionFeeComponent', () => {
  let component: SetSessionFeeComponent;
  let fixture: ComponentFixture<SetSessionFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetSessionFeeComponent]
    });
    fixture = TestBed.createComponent(SetSessionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
