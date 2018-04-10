import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashboardPageRoutingModule } from './userdashboard-page-routing.module';
import { UserdashboardPageComponent } from './userdashboard-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserdashboardPageRoutingModule,
    SharedModule,
  ],
  declarations: [UserdashboardPageComponent],
  exports: [
    UserdashboardPageComponent,
  ],
  providers: [UserService]
})
export class UserdashboardPageModule { }
