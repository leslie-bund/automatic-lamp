import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from "@angular/material/icon";
// import {  } from "@angular/material/sp";

const materialModules: any[] = [
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: materialModules,
})
export class MaterialModule { }
