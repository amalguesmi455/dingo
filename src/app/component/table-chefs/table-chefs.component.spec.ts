import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChefsComponent } from './table-chefs.component';

describe('TableChefsComponent', () => {
  let component: TableChefsComponent;
  let fixture: ComponentFixture<TableChefsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableChefsComponent]
    });
    fixture = TestBed.createComponent(TableChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
