import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  public register = (user: User): Observable<User> => {
     const data = JSON.stringify(user);
     const urlSend = this.url + 'service/user/register';
     return this.httpClient.post<User>(urlSend, data, {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     });
  }

  public login = (user: User): Observable<User> => {
    const data = JSON.stringify(user);
    const urlSend = this.url + 'service/user/login';
    return this.httpClient.post<User>(urlSend, data,  {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'})
    }).pipe(
      map(res  => {
        if (res.error.startsWith('Success')) {
          localStorage.setItem( 'user', JSON.stringify(res));
          return res;
        }
      })
    );
  }
}


