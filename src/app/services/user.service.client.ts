import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from '../models/user.model.client';

// injecting service into module
@Injectable()

export class UserService {

  constructor() {
  }

  users = [
    {_id: '123', username: 'alice',    password: 'alice',     firstName: 'Alice',  lastName: 'Wonder' },
    {_id: '234', username: 'bob',      password: 'bob',   firstName: 'Bob',    lastName: 'Marley'  },
    {_id: '345' , username: 'charly',   password: 'charly',  firstName: 'Charly', lastName: 'Garcia'  },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }

  ];

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser,
  };

  createUser(user: any) {
    user._id = Math.random().toString();
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    return this.users.find(function(user){
        return user._id === userId;
      }
    );
  }

  findUserByCredentials(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username &&
        user.password === password
    });
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  updateUser(userId: String, user: any) {
    const updateUser = this.users.find(function (user) {
      return user._id === userId
    });
    const index = this.users.indexOf(updateUser);
    return this.users[index] = user;

  }


  deleteUser(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        delete this.users[x];
      }
    }
  }
}