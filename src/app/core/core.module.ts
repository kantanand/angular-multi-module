/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from '@app/core/helper';

import { CoreRoutingModule } from '@app/core/core-routing.module';

import { HeaderComponent } from '@app/core/components';
import { FooterComponent } from '@app/core/components';
import { NotFoundComponent } from '@app/core/components';
import { LoginComponent } from '@app/core/components';
import { SignupComponent } from '@app/core/components';

import { AuthGuardService } from '@app/core/services';
import { AuthenticationService } from '@app/core/services';

import { SharedModule } from '../shared/shared.module';


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
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
