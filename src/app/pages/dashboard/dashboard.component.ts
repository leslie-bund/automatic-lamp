import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  gainsData: {icon: string, title: string, value: number | string, gain: number}[] = [
    {
      icon: 'assets/box-tick.svg',
      title: 'Total Order',
      value: 350,
      gain: 23.5
    },
    {
      icon: 'assets/3d-rotate.svg',
      title: 'Total refund',
      value: 270,
      gain: -23.5
    },
    {
      icon: 'assets/shopping-cart.svg',
      title: 'average sales',
      value: 1567,
      gain: -23.5
    },
    {
      icon: 'assets/coin.svg',
      title: 'Total income',
      value: '$350.000',
      gain: 23.5
    },
  ]

  topPlatforms: {
    title: string,
    amount: number,
    percentIncrease: number,
    totalPercent: number,
    color: string
  }[] =  [
    {
      title: 'book bazaar',
      amount: 2_500_000,
      percentIncrease: 15,
      totalPercent: 52,
      color: '#6160DC'
    },
    {
      title: 'artisan aisle',
      amount: 1_800_000,
      percentIncrease: 10,
      totalPercent: 43,
      color: '#54c5eb'
    },
    {
      title: 'toy troop',
      amount: 1_200_000,
      percentIncrease: 8,
      totalPercent: 32,
      color: '#ffb74a'
    },
    {
      title: 'Xstore',
      amount: 250000,
      percentIncrease: 15,
      totalPercent: 22,
      color: '#ff4a55'
    },
  ];

}
