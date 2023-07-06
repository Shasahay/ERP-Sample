import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetclassFeeComponent } from './setclass-fee.component';

describe('SetclassFeeComponent', () => {
  let component: SetclassFeeComponent;
  let fixture: ComponentFixture<SetclassFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetclassFeeComponent]
    });
    fixture = TestBed.createComponent(SetclassFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
