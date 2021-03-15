import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public url: string = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  public save = (category: Category): Observable<Category> => {
     const data = JSON.stringify(category);
     const urlSend = this.url + 'service/base/saveCategory';
     return this.httpClient.post<Category>(urlSend, data, {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     });
  }

  public getAllCategories = (): Observable<Category[]> => {
    const urlSend = this.url + 'service/base/getAllCategories';
    return this.httpClient.get<Category[]>(urlSend);
  }

  public deleteCategory = (category: Category): Observable<boolean> => {
    const urlSend = this.url + 'service/base/deleteCate/' + category.id;
    return this.httpClient.get<boolean>(urlSend);
  }
}


