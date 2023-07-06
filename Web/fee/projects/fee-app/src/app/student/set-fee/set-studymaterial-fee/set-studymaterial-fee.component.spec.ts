import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStudymaterialFeeComponent } from './set-studymaterial-fee.component';

describe('SetStudymaterialFeeComponent', () => {
  let component: SetStudymaterialFeeComponent;
  let fixture: ComponentFixture<SetStudymaterialFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetStudymaterialFeeComponent]
    });
    fixture = TestBed.createComponent(SetStudymaterialFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
