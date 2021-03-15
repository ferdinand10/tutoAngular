import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {BaseService} from '../services/base.service';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Category} from '../models/category';
import {Product} from '../models/product';
import {Report} from '../models/report';
import {StringResult} from '../models/stringResult';

@Component({
  selector: 'app-admin-prod',
  templateUrl: '../pages/product.html',
  providers: [ UserService, BaseService, ProductService ]
})
export class AdminProduct implements OnInit {
  user: User = new User();
  category: Category = new Category();
  categories: Category[];
  selectedCategory: Category;
  product: Product = new Product();
  report: Report = new Report();
  reportName: StringResult = new StringResult();
  srcPdf: string = '';
  products: Product[];
  public isOk: boolean;
  totalRcord: number;

  constructor(private productService: ProductService,
              private userService: UserService,
              private baseService: BaseService, private router: Router) { }

  ngOnInit() {
    this.getAll();
    this.getAllCategories();
  }
  save() {
   if (this.product.name != null) {
       this.product.category =  this.selectedCategory;
       this.productService.save(this.product).subscribe(
      result => {
        this.product = result;
        if ( this.product.id > 0 ) {
          this.getAll();
          this.product = new Product();
        }
      }
    );
   }
  }

  getAll() {
    this.products = [];
    this.productService.getProudcts().subscribe(
      result => {
        this.products = result;
      }
    );

  }

   getAllCategories() {
    this.categories = [];
    this.baseService.getAllCategories().subscribe(
      result => {
        this.categories = result;
      }
    );

  }

  update(prod) {
    this.product = prod;
    this.categories.forEach(cat => {
      if (cat.id === prod.category.id) {
        this.selectedCategory = cat;
      }
    });
    console.log(this.product);
  }

  delete(prod) {
    this.productService.deleteProduct(prod).subscribe(
      result => {
        this.isOk = result;
        if (this.isOk === true) {
            this.products = this.products.filter(p => p !== prod);
        }
      }
    );
  }

  printProduct() {
    this.report.name = 'productList';
    this.productService.printProduct(this.report).subscribe(
      result => {
        this.reportName = result;
      }
    );
  }
  cancel() {
    this.product = new Product();
    this.selectedCategory = new Category();
    this.products = this.products;
  }

}
