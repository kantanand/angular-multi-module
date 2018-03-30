import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  username: String = '';
  password: String = '';

  first_name: String;
  last_login: String;

  user_details: any;

  is_authenticated: Boolean = false;

  ngOnInit() {
    this.is_authenticated = this.isAuthenticated();
    if (this.is_authenticated) {
      this.getUserDetails();
    } else {
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/userdashboard';
    }
  }

  login(username, password) {
    this.authentication.login(username, password)
      .subscribe(
        data => {
          console.log('login:success', data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('login:error', error);
        }
      );
  }

  logout() {
    this.is_authenticated = !this.authentication.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  isAuthenticated() {
    return this.authentication.isAuthenticated();
  }

  getUserDetails() {
    this.user_details = this.authentication.getTokenUserDetails();
  }

}
