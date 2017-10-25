import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  vpassword: String;
  user: User;
  userId: String;
  users: User[];


  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute ) {

  }
  deleteUser(uid: String) {
    this.userService.deleteUser(uid)
      .subscribe(
        (users) => {
          this.users = users;
        });
  }
  regSuccess() {
   if ( this.password === this.vpassword) {
     this.router.navigate(['/profile', this.user._id]);
   }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      return this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
          this.username = user.username;
          this.password = user.password;
        });
    });
  }

}


