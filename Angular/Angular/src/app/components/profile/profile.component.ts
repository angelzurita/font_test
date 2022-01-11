import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/search";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public id: any;

  users: any = [];

  constructor(private userService: UsersService, private _route: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe(data => {
        console.log(data);
        this.users = data;
      });
    });
  }
}