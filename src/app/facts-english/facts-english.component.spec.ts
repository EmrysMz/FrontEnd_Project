import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsEnglishComponent } from './facts-english.component';

describe('FactsEnglishComponent', () => {
  let component: FactsEnglishComponent;
  let fixture: ComponentFixture<FactsEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsEnglishComponent]
    });
    fixture = TestBed.createComponent(FactsEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
