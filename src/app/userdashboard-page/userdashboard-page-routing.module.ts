import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardPageComponent } from './userdashboard-page.component';
import { AuthGuardService } from '../core/services/auth-guard.service';

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
