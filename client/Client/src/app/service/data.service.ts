import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// tslint:disable-next-line:no-inferrable-types
baseUrl: string = 'http://localhost:3000/';


  constructor(private httpClient: HttpClient) { }

  get_users() {
    return this.httpClient.get(this.baseUrl + '/users');
  }
  get_location() {
    return this.httpClient.get(this.baseUrl + '/locations');
  }
  get_status() {
    return this.httpClient.get(this.baseUrl + '/status');
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + '/users');
  }
}
