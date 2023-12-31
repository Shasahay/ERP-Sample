import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearFilterComponent } from './month-year-filter.component';

describe('MonthYearFilterComponent', () => {
  let component: MonthYearFilterComponent;
  let fixture: ComponentFixture<MonthYearFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthYearFilterComponent]
    });
    fixture = TestBed.createComponent(MonthYearFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
