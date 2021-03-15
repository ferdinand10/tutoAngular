import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { Report } from '../models/report';
import { StringResult } from '../models/stringResult';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url: string = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  public save = (product: Product): Observable<Product> => {
     const data = JSON.stringify(product);
     const urlSend = this.url + 'service/product/saveProduct';
     return this.httpClient.post<Product>(urlSend, data, {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     });
  }

  public getProudcts = (): Observable<Product[]> => {
    const urlSend = this.url + 'service/product/getAllProducts';
    return this.httpClient.get<Product[]>(urlSend);
  }

  public deleteProduct = (product: Product): Observable<boolean> => {
    const urlSend = this.url + 'service/product/deleteProd/' + product.id;
    return this.httpClient.get<boolean>(urlSend);
  }

   public printProduct = (report: Report): Observable<StringResult> => {
    const content = JSON.stringify(report);
    const urlSend = this.url + 'service/product/printProduct';
    return this.httpClient.post<StringResult>(urlSend, content,  {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'})
    });
  }
}


