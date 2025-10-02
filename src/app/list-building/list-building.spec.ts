import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuilding } from './list-building';

describe('ListBuilding', () => {
  let component: ListBuilding;
  let fixture: ComponentFixture<ListBuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBuilding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBuilding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
