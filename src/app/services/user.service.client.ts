import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from '../models/user.model.client';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http) {
  }


  api = {'findUserByCredentials': this.findUserByCredentials};

  createUser( user: User ) {
    const url = 'http://localhost:3100/api/user' ;
    return this.http.post(url, user)
      .map((response: Response) => {
      return response.json();
      });
  }
  findUserByCredentials(username: String, password: String) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
      }

  findUserById(userId) {
    const url = 'http://localhost:3100/api/user' + userId;
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
      });
  }
}
