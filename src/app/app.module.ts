import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TileCardsComponent } from './components/tile-cards/tile-cards.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NameTagComponent } from './components/name-tag/name-tag.component';
import { MonthlyGainsCardComponent } from './components/monthly-gains-card/monthly-gains-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { SalesTrendBarChartComponent } from './components/sales-trend-bar-chart/sales-trend-bar-chart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    TileCardsComponent,
    SidebarComponent,
    HeaderComponent,
    LightSwitchComponent,
    NameTagComponent,
    MonthlyGainsCardComponent,
    ProgressBarComponent,
    DashboardTableComponent,
    SalesTrendBarChartComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
