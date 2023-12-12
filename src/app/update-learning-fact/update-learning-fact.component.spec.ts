import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLearningFactComponent } from './update-learning-fact.component';

describe('UpdateLearningFactComponent', () => {
  let component: UpdateLearningFactComponent;
  let fixture: ComponentFixture<UpdateLearningFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLearningFactComponent]
    });
    fixture = TestBed.createComponent(UpdateLearningFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
