import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialViewComponent } from './study-material-view.component';

describe('StudyMaterialViewComponent', () => {
  let component: StudyMaterialViewComponent;
  let fixture: ComponentFixture<StudyMaterialViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyMaterialViewComponent]
    });
    fixture = TestBed.createComponent(StudyMaterialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
