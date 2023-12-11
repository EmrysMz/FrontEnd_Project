import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearningPackageComponent } from './add-learning-package.component';

describe('AddLearningPackageComponent', () => {
  let component: AddLearningPackageComponent;
  let fixture: ComponentFixture<AddLearningPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLearningPackageComponent]
    });
    fixture = TestBed.createComponent(AddLearningPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
