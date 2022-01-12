// traer datos de api de git
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }

  getUsers(input: any) {
    return this.http.get("https://api.github.com/search/users?q="+input);
  }

  getUser(id: any) {
    return this.http.get("https://api.github.com/users/"+id);
  }

  getFollowers(id: any) {
    return this.http.get("https://api.github.com/users/"+id+"/followers");
  }
}
