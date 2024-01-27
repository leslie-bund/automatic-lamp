import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyGainsCardComponent } from './monthly-gains-card.component';

describe('MonthlyGainsCardComponent', () => {
  let component: MonthlyGainsCardComponent;
  let fixture: ComponentFixture<MonthlyGainsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyGainsCardComponent]
    });
    fixture = TestBed.createComponent(MonthlyGainsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
