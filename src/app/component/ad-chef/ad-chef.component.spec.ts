import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdChefComponent } from './ad-chef.component';

describe('AdChefComponent', () => {
  let component: AdChefComponent;
  let fixture: ComponentFixture<AdChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdChefComponent]
    });
    fixture = TestBed.createComponent(AdChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
