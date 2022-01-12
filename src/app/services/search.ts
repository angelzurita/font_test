import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  apiUrl = "https://api.github.com/search/users?q=";
  userList: any = [];

  getUsers(input: any) {
    let item = input;
    return this.http.get<[]>(this.apiUrl + item).toPromise();
  }

}



