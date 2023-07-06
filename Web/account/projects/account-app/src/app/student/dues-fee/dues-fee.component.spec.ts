import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueFeeComponent } from './dues-fee.component';

describe('DueFeeComponent', () => {
  let component: DueFeeComponent;
  let fixture: ComponentFixture<DueFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DueFeeComponent]
    });
    fixture = TestBed.createComponent(DueFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
