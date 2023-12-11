import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsPhysicsComponent } from './facts-physics.component';

describe('FactsPhysicsComponent', () => {
  let component: FactsPhysicsComponent;
  let fixture: ComponentFixture<FactsPhysicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsPhysicsComponent]
    });
    fixture = TestBed.createComponent(FactsPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
