import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule} from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomePageModule { }
