import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsComputerScienceComponent } from './facts-computer-science.component';

describe('FactsComputerScienceComponent', () => {
  let component: FactsComputerScienceComponent;
  let fixture: ComponentFixture<FactsComputerScienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsComputerScienceComponent]
    });
    fixture = TestBed.createComponent(FactsComputerScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
