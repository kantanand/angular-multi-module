import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreAndBookPageRoutingModule } from './explore-and-book-page-routing.module';
import { ExploreAndBookPageComponent } from './explore-and-book-page.component';

@NgModule({
  imports: [
    CommonModule,
    ExploreAndBookPageRoutingModule
  ],
  declarations: [ExploreAndBookPageComponent]
})
export class ExploreAndBookPageModule { }
