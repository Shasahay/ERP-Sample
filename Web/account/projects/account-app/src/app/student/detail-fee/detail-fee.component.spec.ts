import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeeComponent } from './detail-fee.component';

describe('DetailFeeComponent', () => {
  let component: DetailFeeComponent;
  let fixture: ComponentFixture<DetailFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFeeComponent]
    });
    fixture = TestBed.createComponent(DetailFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
