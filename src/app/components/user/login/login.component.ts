import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import 'rxjs/Rx';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  user: User;

  errorFlag: boolean
  errorMsg = 'Invalid username or password !';

  constructor( private userservice: UserService, private router: Router) {

  }

  ngOnInit() {}

  login(username: String, password: String) {
    this.userservice.findUserByCredentials(username, password)
      .subscribe((user: User) => {
      if (user) {
        this.router.navigate(['/profile', user._id]);
      }
    });
  }
  register(username: String, password: String) {
    const user = new User('', username , password , '' , '');
    this.userservice.createUser(user)
      .subscribe((user1: User) => {
      if (user1) {
        this.router.navigate(['/register', user1._id]);
      }
        });
  }


}
