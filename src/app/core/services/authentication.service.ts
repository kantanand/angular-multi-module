import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  token = {
    access_token: null,
    expiry_date: null,
    refresh_token: 'refreshtokencode',
    user_details: {
      username: null,
      first_name: null,
      role: null,
      last_login: null,
    }
  };

  tokenKey: string = 'currentUser';

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
          this.token.expiry_date = user_token.expiry_date;
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

  isJwtTokenExpired() {
    const expiry_date = this.getExpiryTime();
    if (Math.round(new Date().getTime() / 1000) > expiry_date) {
      console.error('authentication: token expired');
      // delete the token
      this.removeToken();
      return true;
    } else {
      return false;
    }
  }

  getExpiryTime() {
    const jwt_token = this.getToken();
    if (jwt_token) {
      return jwt_token.expiry_date;
    } else {
      return 0;
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

  verifyToken() {
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

  refreshToken() {
    // this the api to get refresh token and set it
    if (this.verifyToken()) {
      const jwt_token_refresh_url = 'http://localhost:8000/api/api-token-refresh/';
      return this.http.post<any>(jwt_token_refresh_url, { token: this.getAccessToken() })
      .subscribe(
        response_success => {
          console.log('refreshToken:success', response_success);
          this.token.access_token = response_success.token;
          // need to update the exp using jwt decode
          // this.token.expiry_date = response_success.token.exp;
          this.setToken(this.token);
          return response_success;
        },
        error_response => {
          console.log('refreshToken:error', error_response.status);
          this.removeToken();
        }
      );
    }
  }

  removeToken() {
    if (this.isAuthenticated()) {
      localStorage.removeItem(this.tokenKey);
    }
  }

}
