import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'analytics-dashboard';

  constructor(
    private darkModeService: DarkModeService,
  ) { }

  public get darkModeSelected$() {
    return this.darkModeService.darkModeSelected$;
  }
}
