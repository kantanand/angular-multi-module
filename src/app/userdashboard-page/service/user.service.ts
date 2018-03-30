import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails() {
    const user_profile_url = 'http://localhost:8000/api/get-user-details/';
    return this.http.get(user_profile_url).map(
      res => {
        return res;
      }
    );
  }
}
