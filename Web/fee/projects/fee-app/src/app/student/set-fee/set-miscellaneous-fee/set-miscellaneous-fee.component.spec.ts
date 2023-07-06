import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMiscellaneousFeeComponent } from './set-miscellaneous-fee.component';

describe('SetMiscellaneousFeeComponent', () => {
  let component: SetMiscellaneousFeeComponent;
  let fixture: ComponentFixture<SetMiscellaneousFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetMiscellaneousFeeComponent]
    });
    fixture = TestBed.createComponent(SetMiscellaneousFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
