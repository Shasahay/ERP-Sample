import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeeComponent } from './set-fee.component';

describe('SetFeeComponent', () => {
  let component: SetFeeComponent;
  let fixture: ComponentFixture<SetFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetFeeComponent]
    });
    fixture = TestBed.createComponent(SetFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
