import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexNoData,
  ApexPlotOptions,
  ApexStates,
} from 'ng-apexcharts';

type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | ApexYAxis[] | any;
  title: ApexTitleSubtitle | any;
  plotOptions: ApexPlotOptions & any;
  labels: string[] | any;
  colors: string[] | any;
  states: ApexStates | any;
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  noData: ApexNoData | any;
};

@Component({
  selector: 'app-sales-trend-bar-chart',
  templateUrl: './sales-trend-bar-chart.component.html',
  styleUrls: ['./sales-trend-bar-chart.component.css'],
})
export class SalesTrendBarChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '',
          type: 'column',
          data: [14, 20, 11, 37, 19, 11, 48, 35, 25, 32, 22, 34],
        },
      ],
      chart: {
        height: 450,
        type: 'bar',
      },
      colors: [''],
      fill: {
        type: 'solid',
        opacity: 0.9,
        colors: ['#34CAA51A'],
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.15,
          },
        },
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      plotOptions: {
        bar: {
          borderRadius: 15,
          borderRadiusApplication: 'end',
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            colors: '#525252',
            cssClass: 'font-semibold',
          },
        },
      },
      yaxis: {
        range: 50,
        labels: {
          style: {
            colors: '#525252',
            cssClass: 'font-semibold',
          },
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
      },
    };
  }
}
