import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;

  errorFlag: boolean
  errorMsg = 'Invalid username or password !';

  constructor( private userservice: UserService, private router: Router) {

  }

  ngOnInit() {}
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user: User = this.userservice.findUserByCredentials(this.username, this.password);
    if (user) {
      this.router.navigate(['/profile', user._id]);
    }



  }

}