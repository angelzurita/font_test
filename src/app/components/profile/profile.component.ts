import { Component, OnInit } from '@angular/core';
import {userService} from "../../services/user";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public id: any;

  users: any = [];

  constructor(private userService: userService, private route: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {

  // Agarramos el id del usuario
    // let idUsuario = this.route.snapshot.paramMap.get("id");

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe(data => {
        this.users = data;
      });
    });
  }
}