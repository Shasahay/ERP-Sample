import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeePayDialogComponent } from './fee-pay-dialog.component';

describe('FeePayDialogComponent', () => {
  let component: FeePayDialogComponent;
  let fixture: ComponentFixture<FeePayDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeePayDialogComponent]
    });
    fixture = TestBed.createComponent(FeePayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
