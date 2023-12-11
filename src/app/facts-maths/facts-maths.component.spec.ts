import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsMathsComponent } from './facts-maths.component';

describe('FactsMathsComponent', () => {
  let component: FactsMathsComponent;
  let fixture: ComponentFixture<FactsMathsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsMathsComponent]
    });
    fixture = TestBed.createComponent(FactsMathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
