import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@app/core/services';
import { SavePageComponent } from './save-page.component';

const routes: Routes = [
  {
    path: '',
    component: SavePageComponent
  },
  {
    path: 'explore-and-book/:project_id',
    canActivate: [AuthGuardService],
    loadChildren: './explore-and-book-page/explore-and-book-page.module#ExploreAndBookPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePageRoutingModule { }


