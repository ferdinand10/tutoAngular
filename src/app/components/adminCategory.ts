import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {BaseService} from '../services/base.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Category} from '../models/category';

@Component({
  selector: 'app-admin-cat',
  templateUrl: '../pages/category.html',
  providers: [ UserService, BaseService ]
})
export class AdminCategory implements OnInit {
  user: User = new User();
  category: Category = new Category();
  categories: Category[];
  public isOk: boolean;

  constructor(private userService: UserService, private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }
  save() {
   if (this.category.name != null) {
       this.baseService.save(this.category).subscribe(
      result => {
        this.category = result;
        if ( this.category.id > 0 ) {
          this.category = new Category();
          this.getAll();
        }
      }
    );
   }
  }

  getAll() {
    this.categories = [];
    this.baseService.getAllCategories().subscribe(
      result => {
        this.categories = result;
      }
    );

  }

  update(cat) {
    this.category = cat;
    console.log(this.category);
  }

  delete(cat) {
    this.baseService.deleteCategory(cat).subscribe(
      result => {
        this.isOk = result;
        if (this.isOk === true) {
            this.categories = this.categories.filter(c => c !== cat);
        }
      }
    );
  }

  cancel() {
    this.category = new Category();
    this.categories = this.categories;
  }

}
