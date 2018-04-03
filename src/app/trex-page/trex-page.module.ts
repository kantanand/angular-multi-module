import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrexPageRoutingModule } from './trex-page-routing.module';
import { TrexPageComponent } from './trex-page.component';

@NgModule({
  imports: [
    CommonModule,
    TrexPageRoutingModule
  ],
  declarations: [TrexPageComponent]
})
export class TrexPageModule { }
