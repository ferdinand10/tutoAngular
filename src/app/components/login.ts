import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: '../pages/login.html'
})
export class Login implements OnInit {
  public user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.user);
    this.userService.login(this.user).subscribe(
      result => {
        this.user = result;
        if (this.user.error.startsWith('Success')) {
            this.router.navigate(['/dashbord']);
        }
      }
    );
  }

}
