import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-dashbord',
  templateUrl: '../pages/dashBord.html'
})
export class DashBord implements OnInit {
  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  register() {
    this.userService.register(this.user).subscribe(
      result => {
        this.user = result;
        console.log('Bienvenue dans angular');
      }
    );
  }

}
