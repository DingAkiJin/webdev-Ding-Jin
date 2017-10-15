import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {User} from "../../../models/user.model.client";

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

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any ) => {
          this.userId = params['uid'];
        }
      )
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user.username;
    this.firstname = this.user.firstName;
    this.lastname = this.user.lastName;


  }

}
