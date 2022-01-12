import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class userService {
    constructor(private _http: HttpClient) {
    }

    public getUsers(input: any): Observable<any> {
        const url = "https://api.github.com/search/users?q=" + input;
        return this._http.get(url);
    }

    public getUser(id: any): Observable<any> {
        const url = "https://api.github.com/users/" + id;
        return this._http.get(url);
        
      }

}