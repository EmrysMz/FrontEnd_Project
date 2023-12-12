import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearningFactComponent } from './add-learning-fact.component';

describe('AddLearningFactComponent', () => {
  let component: AddLearningFactComponent;
  let fixture: ComponentFixture<AddLearningFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLearningFactComponent]
    });
    fixture = TestBed.createComponent(AddLearningFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
