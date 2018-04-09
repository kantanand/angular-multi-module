import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../core/services/auth-guard.service';
import { ExploreAndBookPageComponent } from './explore-and-book-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreAndBookPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreAndBookPageRoutingModule { }
