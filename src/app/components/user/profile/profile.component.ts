import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {extractStyleParams} from '@angular/animations/browser/src/util';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: any;
  firstname: String;
  username: String;
  lastname: String;
  password: String;

  constructor(private sharedService: SharedService,
      private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (status) => {
          this.router.navigate(['/login']);
        }
      );
  }

  updateUser(username: String, password: String, firstname: String, lastname: String) {
    const updateUser = {
      _id: this.userId,
      username: username ,
      password: password,
      firstName: firstname,
      lastName: lastname,
    }
    this.userService.updateUser(updateUser).subscribe((user: User) => {
      this.user = user;
    });
  }

  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.password = this.user['password'];
    this.firstname = this.user['firstName'];
    this.lastname = this.user['lastName'];
    this.userId = this.user['_id'];
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.getUser();
    this.userService.findUserById(this.userId).subscribe((user: User) => {
      this.user = user;
    });
    // alert('userId: ' + this.userId);
  }
    // this.activatedRoute.params.subscribe(params => {
    //   this.userId = params['uid'];
    //   return this.userService.findUserById(this.userId)
    //     .subscribe((user: User) => {
    //       this.user = user;
    //       this.password = user.password;
    //       this.username = user.username;
    //       this.firstname = user.firstName;
    //       this.lastname = user.lastName;
    //     });
    // });
}
