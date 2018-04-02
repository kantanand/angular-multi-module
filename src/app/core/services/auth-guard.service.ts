import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const accessToken = this.authentication.getAccessToken();
    if (this.authentication.isAuthenticated()) {
      if (this.authentication.isTimeToRenewJwtToken()) {
        console.log('is time to auth: ' + true);
        if (!this.authentication.isJwtTokenExpired()) {
          this.authentication.refreshToken().subscribe(
            data => {
              return true;
            },
            error => {
              return false;
            }
          );
        } else {
          this.authentication.removeToken(state.url);
          return false;
        }
      } else {
        console.log('is time to auth: ' + false);
        return true;
      }
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
