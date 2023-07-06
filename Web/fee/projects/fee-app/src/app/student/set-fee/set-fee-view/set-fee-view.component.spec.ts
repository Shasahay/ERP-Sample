import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeeViewComponent } from './set-fee-view.component';

describe('SetFeeViewComponent', () => {
  let component: SetFeeViewComponent;
  let fixture: ComponentFixture<SetFeeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetFeeViewComponent]
    });
    fixture = TestBed.createComponent(SetFeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
