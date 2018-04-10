import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailsPageComponent],
})
export class DetailsPageModule { }
