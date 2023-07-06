import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTransportFeeComponent } from './set-transport-fee.component';

describe('SetTransportFeeComponent', () => {
  let component: SetTransportFeeComponent;
  let fixture: ComponentFixture<SetTransportFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTransportFeeComponent]
    });
    fixture = TestBed.createComponent(SetTransportFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
