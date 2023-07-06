import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAttireFeeComponent } from './set-attire-fee.component';

describe('SetAttireFeeComponent', () => {
  let component: SetAttireFeeComponent;
  let fixture: ComponentFixture<SetAttireFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetAttireFeeComponent]
    });
    fixture = TestBed.createComponent(SetAttireFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
