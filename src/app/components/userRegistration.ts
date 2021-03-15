import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: '../pages/userRegistration.html',
  providers: [ UserService ]
})
export class UserRegistration implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.userService.register(this.user).subscribe(
      result => {
        this.user = result;
        if (this.user.error.startsWith('Success')) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
