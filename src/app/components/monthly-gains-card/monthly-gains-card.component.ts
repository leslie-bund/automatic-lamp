import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-gains-card',
  templateUrl: './monthly-gains-card.component.html',
  styleUrls: ['./monthly-gains-card.component.css']
})
export class MonthlyGainsCardComponent {
  @Input('icon') icon!: string | any;
  @Input('card-title') title!: string | any;
  @Input('value') value!: string | any;
  @Input('gain') gain!: string | any;


}
