import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsLessonComponent } from './facts-lesson.component';

describe('FactsLessonComponent', () => {
  let component: FactsLessonComponent;
  let fixture: ComponentFixture<FactsLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsLessonComponent]
    });
    fixture = TestBed.createComponent(FactsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
