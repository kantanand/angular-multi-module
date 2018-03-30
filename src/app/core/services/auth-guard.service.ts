import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const accessToken = this.authentication.getAccessToken();
    if (this.authentication.isAuthenticated()) {
      if (!this.authentication.isJwtTokenExpired()) {
        this.authentication.refreshToken();
      } else {
        return false;
      }
      return true;
    } else {
      console.error('User is not authenticated.');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
  // this.redirectToLoginPage();
  // redirectToLoginPage() {
  //   this.router.navigate(['/login']);
  // }
}
