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

@NgModule({
  declarations: [
    AppComponent,
    TileCardsComponent,
    SidebarComponent,
    HeaderComponent,
    LightSwitchComponent,
    NameTagComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
