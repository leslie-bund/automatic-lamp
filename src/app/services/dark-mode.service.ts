import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() {
    this.darkModeSelected = JSON.parse(localStorage.getItem('darkModeSelected') || 'false');
   }

  
  private _darkModeSelected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get darkModeSelected$() : Observable<boolean> {
    return this._darkModeSelected;
  }
  public set darkModeSelected(v : boolean) {
    localStorage.setItem('darkModeSelected', JSON.stringify(v));
    this._darkModeSelected.next(v);
  }
  
}
