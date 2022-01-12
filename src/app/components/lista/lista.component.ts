import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/search";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  userList: any = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  userData(input: any) {
    this.userService.getUsers(input).then(
      (response: any) => {
        // Success callback
        console.log(response);
        this.userList = response;
      },
      (error: any) => {
        // Error callback
        console.log(error);
      }
    );
  }
}
