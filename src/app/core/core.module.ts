import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { JwtInterceptor } from './helper/jwt.interceptor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CoreRoutingModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SharedModule,
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
