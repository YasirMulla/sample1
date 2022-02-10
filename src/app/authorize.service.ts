import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getJSON } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor(private http: HttpClient) {}

  getAuthToken(name: string, pwd: string) {
    return this.http
      .post('http://localhost:4200/api/v1/login', {
        name: name,
        pwd: pwd,
      })
      .toPromise()
      .then(function (res) {
        return JSON.stringify(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
