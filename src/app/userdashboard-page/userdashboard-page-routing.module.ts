import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardPageComponent } from './userdashboard-page.component';
import { AuthGuardService } from '@app/core/services';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: UserdashboardPageComponent
  },
  {
    path: 'details',
    canActivate: [AuthGuardService],
    loadChildren: 'app/userdashboard-page/details-page/details-page.module#DetailsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashboardPageRoutingModule { }
