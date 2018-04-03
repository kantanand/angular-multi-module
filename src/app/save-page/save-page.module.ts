import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavePageRoutingModule } from './save-page-routing.module';
import { SavePageComponent } from './save-page.component';

@NgModule({
  imports: [
    CommonModule,
    SavePageRoutingModule
  ],
  declarations: [SavePageComponent]
})
export class SavePageModule { }
