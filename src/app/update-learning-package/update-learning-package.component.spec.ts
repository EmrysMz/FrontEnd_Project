import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLearningPackageComponent } from './update-learning-package.component';

describe('UpdateLearningPackageComponent', () => {
  let component: UpdateLearningPackageComponent;
  let fixture: ComponentFixture<UpdateLearningPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLearningPackageComponent]
    });
    fixture = TestBed.createComponent(UpdateLearningPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
