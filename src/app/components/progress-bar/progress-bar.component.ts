import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input('progressTitle') title!: string;
  @Input('amount') amount!: number;
  @Input('increasedPercent') incr!: number;
  @Input('totalPercent') progress!: number;
  @Input('color') color !: string;
}
