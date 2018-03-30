import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialThemeModule } from './material-theme/material-theme.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialThemeModule
  ],
  declarations: [],
  exports: [
    MaterialThemeModule,
  ]
})
export class SharedModule { }
