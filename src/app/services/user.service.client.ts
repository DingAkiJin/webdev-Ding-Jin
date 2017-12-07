import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from '../models/user.model.client';
import {SharedService} from './shared.service';

// injecting service into module
@Injectable()

export class UserService {
  constructor(private sharedService: SharedService , private http: Http, private router: Router) {
  }
  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;


  api = {'findUserByCredentials': this.findUserByCredentials};
  register(username, password) {
    const url = this.baseUrl + '/api/register' ;
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
      return response;
      });
  }
  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map((res: Response) => {
      const user = res.json();
      if (user !== 0) {
        this.sharedService.user = user;
        return true;
      }else {
        this.router.navigate(['/login']);
        alert('Please login first');
        return false;
      }
      });
  }
  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', {}, this.options)
      .map((res: Response) => {
          return res;
        }
      );
  }
  login(username, password) {
    const url = this.baseUrl + '/api/login' ;
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteUser(uid) {
    const url = this.baseUrl + '/api/user/' + uid ;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updateUser( updateUser) {
    const url = this.baseUrl + '/api/user/' + updateUser._id ;
    return this.http.put(url, updateUser)
      .map((response: Response) => {
        return response.json();
      });
  }
  createUser(user) {
    const url = this.baseUrl + '/api/user' ;
    return this.http.post(url, user)
      .map((response: Response) => {
      return response.json();
      });
  }
  findUserByUsername(username: String) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findUserByCredentials(username: String, password: String) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
      }

  findUserById(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
      });
  }
}
