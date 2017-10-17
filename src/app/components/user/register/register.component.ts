import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') createUserForm: NgForm;
  username: String;
  password: String;

  errorFlag: boolean
  errorMsg = 'Invalid username or password !';

  constructor( private userservice: UserService, private router: Router) {

  }

  ngOnInit() {}
  createNewUser() {
    this.username = this.createUserForm.value.username;
    this.password = this.createUserForm.value.password;
    const user: User = this.userservice.createUser(this.username, this.password);
    if (user) {
      this.router.navigate(['/profile', user._id]);
    }


  }
  }


