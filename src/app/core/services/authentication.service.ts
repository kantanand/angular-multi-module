import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  token = {
    access_token: null,
    expiry_date: null,
    user_details: {
      username: null,
      first_name: null,
      role: null,
      last_login: null,
    }
  };

  tokenKey: any = 'currentUser';
  jwtHelper: any = new JwtHelperService();

  constructor(private router: Router, private http: HttpClient) { }

  login(username, password) {
    console.log('username:' + username, 'password:' + password);
    const auth_url = 'http://localhost:8000/api/get-auth-login/';
    return this.http.post<any>(auth_url, {username: username, password: password})
      .map(user_token => {
        console.log('user:', user_token.username);
        if (user_token && user_token.status) {
          this.token.access_token = user_token.token;
          this.token.user_details.username = user_token.username;
          this.token.user_details.first_name = user_token.first_name;
          this.token.user_details.role = user_token.role;
          this.token.user_details.last_login = user_token.last_login;
          this.token.expiry_date = this.jwtHelper.getTokenExpirationDate(user_token.token);
          this.setToken(this.token);
        } else if (user_token && !user_token.status) {
          console.error(user_token.message);
        } else {
          console.error('user does not exists !');
        }
        return user_token;
      });
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/login']);
    return true;
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  isAuthenticated() {
    const token = localStorage.getItem(this.tokenKey);
    // chekc if the user has token
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    if (this.isAuthenticated()) {
      return JSON.parse(localStorage.getItem(this.tokenKey));
    } else {
      return null;
    }
  }

  getAccessToken() {
    const json_data = this.getToken();
    if (json_data) {
      return json_data['access_token'];
    } else {
      return null;
    }
  }

  getTokenUserDetails() {
    const token_data = this.getToken();
    if (token_data) {
      return token_data['user_details'];
    } else {
      return null;
    }
  }

  getExpiryTime() {
    const jwt_token = this.getAccessToken();
    if (jwt_token) {
      return this.jwtHelper.decodeToken(jwt_token).exp;
    } else {
      return 0;
    }
  }

  isJwtTokenExpired() {
    const cr_token = this.getAccessToken();
    if (cr_token) {
      return this.jwtHelper.isTokenExpired(cr_token);
    } else {
      return true;
    }
  }

  isTimeToRenewJwtToken() {
    const expiry_time = this.getExpiryTime();
    if (Math.round(new Date().getTime() / 1000) > (expiry_time - 150)) {
      console.log('isTimeToRenewJwtToken: yes token expired:', (expiry_time - 150));
      return true;
    } else {
      return false;
    }
  }

  refreshToken() {
    // this the api to get refresh token and set it
    const current_token = this.getToken();
    const current_access_token = this.getAccessToken();
    const jwt_token_refresh_url = 'http://localhost:8000/api/api-token-refresh/';
    return this.http.post<any>(jwt_token_refresh_url, { token: current_access_token })
      .map(response_data => {
        console.log('refreshToken: ', response_data);
        if (response_data.token) {
          current_token.access_token = response_data.token;
          current_token.expiry_date = this.jwtHelper.getTokenExpirationDate(response_data.token);
          this.setToken(current_token);
        } else {
          console.error('session token: expired please re-login');
          this.removeToken();
        }
      return response_data;
    });
  }

  verifyToken() {
    // REF: http://getblimp.github.io/django-rest-framework-jwt/#verify-token
    let status: Boolean = false;
    const jwt_verify_token_url = 'http://localhost:8000/api/api-token-verify/';
    this.http.post(jwt_verify_token_url, { token: this.getAccessToken() })
      .subscribe(
        response_success => {
          console.log('jwt_token_verify:', response_success);
          status = true;
        },
        error_response => {
          console.error('jwt_token_verify:', error_response.error.non_field_errors);
          status = false;
        }
      );
    return status;
  }

  removeToken(login_redirect_url = '/userdashboard') {
    if (this.isAuthenticated()) {
      localStorage.removeItem(this.tokenKey);
      this.router.navigate(['/login'], { queryParams: { returnUrl: login_redirect_url } });
    }
  }

}
