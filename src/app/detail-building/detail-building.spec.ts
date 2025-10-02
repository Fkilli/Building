import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBuilding } from './detail-building';

describe('DetailBuilding', () => {
  let component: DetailBuilding;
  let fixture: ComponentFixture<DetailBuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBuilding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBuilding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
