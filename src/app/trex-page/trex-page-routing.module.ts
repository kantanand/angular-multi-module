import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { TrexPageComponent } from './trex-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: TrexPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrexPageRoutingModule { }
