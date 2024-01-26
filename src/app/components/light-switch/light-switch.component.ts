import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit{

  public darkModeSelected: boolean = false;

  constructor(
    private darkModeService: DarkModeService,
  ) { }

  ngOnInit() {
    this.darkModeService.darkModeSelected$.subscribe((value) => {
      this.darkModeSelected = value;
    });
  };

  public onDarkModeSwitchChange() {
    this.darkModeService.darkModeSelected = !this.darkModeSelected;
  }
}
