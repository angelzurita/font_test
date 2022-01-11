import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/search";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  userList:any = [];
  state: boolean = true;

  validarInput(input: any) {
    if (input.length > 0) {
      this.state = false;
    } else {
      this.state = true;
    }
  }

  getUsers(input: any) {
    console.log(input);
    let item = input;
    this.userService.getUsers(item).subscribe(data => this.userList = data);
  }

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
  }
}
