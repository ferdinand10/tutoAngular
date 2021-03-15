import { Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private router: Router) {}
  ngOnInit() {
      console.log('appCompoent');
      if ( this.user == null) {
         this.user = JSON.parse(localStorage.getItem('user'));
         if (this.user == null) {
         this.router.navigate(['/login']);
      } else {
         if (window.location.pathname === '/') {
            this.router.navigate(['/dashbord']);
         }
      }
     }
  }
public logout() {
  localStorage.removeItem('user');
  this.user = null;
  this.router.navigate(['/login']);
}
}
