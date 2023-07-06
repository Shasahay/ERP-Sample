import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeeDailogViewComponent } from './set-fee-dailog-view.component';

describe('SetFeeDailogViewComponent', () => {
  let component: SetFeeDailogViewComponent;
  let fixture: ComponentFixture<SetFeeDailogViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetFeeDailogViewComponent]
    });
    fixture = TestBed.createComponent(SetFeeDailogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
