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



}
