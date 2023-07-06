import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeeDailogComponent } from './set-fee-dailog.component';

describe('SetFeeDailogComponent', () => {
  let component: SetFeeDailogComponent;
  let fixture: ComponentFixture<SetFeeDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetFeeDailogComponent]
    });
    fixture = TestBed.createComponent(SetFeeDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
