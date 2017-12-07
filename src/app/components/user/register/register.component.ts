import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {SharedService} from "../../../services/shared.service";
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
  constructor(private sharedService: SharedService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute ) {

  }
  deleteUser(uid: String) {
    this.userService.deleteUser(uid)
      .subscribe(
        (users) => {
          this.users = users;
        });
  }
  regSuccess(username, password) {
    this.username = username;
    this.password = password;
    this.userService.register(this.username, this.password)
      .subscribe((user) => {
       this.sharedService.user = user;
       this.router.navigate(['/profile']); });
   //  this.userService.findUserByUsername(this.username)
   //    .subscribe((user) => {
   //    console.log(user);
   //    if  (user === null)  {
   //      const newUser = {
   //        username: this.username ,
   //        password: this.password
   //    }
   //      this.userService.createUser(newUser).subscribe((user1) => {
   //        console.log(user1);
   //        this.router.navigate(['/profile', user1._id]);
   //        // if (user1) {
   //          // this.router.navigate(['/register', user1._id]);
   //        // }
   //      });
   //      // this.router.navigate(['/profile', this.user._id]);
   //    }
   //    });
   // // if ( this.password === this.vpassword) {
   // //   this.router.navigate(['/profile', this.user._id]);
   // // }
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


