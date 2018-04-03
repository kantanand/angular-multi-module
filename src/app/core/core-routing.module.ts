import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { UserdashboardPageComponent } from '../userdashboard-page/userdashboard-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'userdashboard',
    canActivate: [AuthGuardService],
    loadChildren: 'app/userdashboard-page/userdashboard-page.module#UserdashboardPageModule'
  },
  {
    path: 'save',
    canActivate: [AuthGuardService],
    loadChildren: 'app/save-page/save-page.module#SavePageModule'
  },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuardService],
  //   loadChildren: '../admin/admin.module#AdminModule'
  // },
  // {
  //   path: 'form',
  //   loadChildren: '../form/form.module#FormModule'
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
