import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutionViewComponent } from './tution-view.component';

describe('TutionViewComponent', () => {
  let component: TutionViewComponent;
  let fixture: ComponentFixture<TutionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutionViewComponent]
    });
    fixture = TestBed.createComponent(TutionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
