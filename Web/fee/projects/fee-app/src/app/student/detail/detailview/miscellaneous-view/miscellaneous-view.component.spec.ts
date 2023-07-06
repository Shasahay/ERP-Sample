import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousViewComponent } from './miscellaneous-view.component';

describe('MiscellaneousViewComponent', () => {
  let component: MiscellaneousViewComponent;
  let fixture: ComponentFixture<MiscellaneousViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscellaneousViewComponent]
    });
    fixture = TestBed.createComponent(MiscellaneousViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
