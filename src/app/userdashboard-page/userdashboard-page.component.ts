import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-userdashboard-page',
  templateUrl: './userdashboard-page.component.html',
  styleUrls: ['./userdashboard-page.component.scss']
})
export class UserdashboardPageComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _authentication: AuthenticationService
  ) { }

  user_details = <any> {
    first_name: null,
  };

  ngOnInit() {
    this.get_user_details();
  }

  get_user_details() {
    this._userService.getUserDetails().subscribe(
      data => {
        // console.log(data);
        this.user_details = data;
      },
      error => {
        console.log('user details not available');
      }
    );
  }

  logout() {
    this._authentication.logout();
  }

}
