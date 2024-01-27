import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent {

  constructor() {}

  @Input('data') tableData: {
    name: string;
    img: string;
    date: string;
    amount: number;
    status: 'Paid' | 'Refund';
    invoiceBase64: string;
  }[] = [
    {
      name: 'marcus bergson',
      date: 'Nov 15, 2023',
      img: 'assets/marcus.svg',
      amount: 80_000,
      status: 'Paid',
      invoiceBase64: ''
    },
    {
      name: 'jaydon vaccaro',
      date: 'Nov 15, 2023',
      img: 'assets/jaydon.svg',
      amount: 150_000,
      status: 'Refund',
      invoiceBase64: ''
    },
    {
      name: 'corey schleifer',
      date: 'Nov 14, 2023',
      img: 'assets/corey.svg',
      amount: 87_000,
      status: 'Paid',
      invoiceBase64: ''
    },
    {
      name: 'cooper press',
      date: 'Nov 14, 2023',
      img: 'assets/cooper.svg',
      amount: 100_000,
      status: 'Refund',
      invoiceBase64: ''
    },
    {
      name: 'marcus bergson',
      date: 'Nov 13, 2023',
      img: 'assets/philip.svg',
      amount: 78_000,
      status: 'Paid',
      invoiceBase64: ''
    },
  ]

}
