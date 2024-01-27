import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTrendBarChartComponent } from './sales-trend-bar-chart.component';

describe('SalesTrendBarChartComponent', () => {
  let component: SalesTrendBarChartComponent;
  let fixture: ComponentFixture<SalesTrendBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesTrendBarChartComponent]
    });
    fixture = TestBed.createComponent(SalesTrendBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
