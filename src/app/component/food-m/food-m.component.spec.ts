import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMComponent } from './food-m.component';

describe('FoodMComponent', () => {
  let component: FoodMComponent;
  let fixture: ComponentFixture<FoodMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodMComponent]
    });
    fixture = TestBed.createComponent(FoodMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
