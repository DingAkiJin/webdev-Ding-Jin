import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {extractStyleParams} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;
  firstname: String;
  username: String;
  lastname: String;
  password: String;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  updateUser(username: String, password: String, firstname: String, lastname: String) {
    const updateUser = {
      _id: this.user._id,
      username: username ,
      password: password,
      firstName: firstname,
      lastName: lastname,
    }
    this.userService.updateUser(updateUser).subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
          this.password = user.password;
          this.username = user.username;
          this.firstname = user.firstName;
          this.lastname = user.lastName;
        });
    });
  }
}
