import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlatComponent } from './table-plat.component';

describe('TablePlatComponent', () => {
  let component: TablePlatComponent;
  let fixture: ComponentFixture<TablePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePlatComponent]
    });
    fixture = TestBed.createComponent(TablePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
