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
  baseUrl = environment.baseUrl;


  api = {'findUserByCredentials': this.findUserByCredentials};

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
