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

  @ViewChild('f') createUserForm: NgForm;
  username: String;
  password: String;
  user0: User ;

  errorFlag: boolean
  errorMsg = 'Invalid username or password !';

  constructor( private userservice: UserService, private router: Router) {

  }

  ngOnInit() {}
  createUser(username, password) {
    const user: User = new User('', username, password , '' , '' );
    this.userservice.createUser(user)
      .subscribe((user0) => {
        this.user0 = user0;
      });
  }
  }


