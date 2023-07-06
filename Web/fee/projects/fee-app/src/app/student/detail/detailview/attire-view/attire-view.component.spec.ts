import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttireViewComponent } from './attire-view.component';

describe('AttireViewComponent', () => {
  let component: AttireViewComponent;
  let fixture: ComponentFixture<AttireViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttireViewComponent]
    });
    fixture = TestBed.createComponent(AttireViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
