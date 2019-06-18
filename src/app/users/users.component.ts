import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AllUsers} from "./model/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers: AllUsers[] = [];
  model: UserViewModel = {
    fName:'',
    lName:'',
    age:''
  };

  createUser(): void{
    let url = "http://localhost:8080/createUser";
    this.http.post(url, this.model).subscribe(
      res => {
        alert("New employee was successfully created! \n Congratulations! ");
        location.reload();
      },
      error => {
        alert("Ошибка при создании пользователя");
      }
    );
  }


  public getUsers(){
    let url = "http://localhost:8080/getUsers";
    this.http.get<AllUsers[]>(url).subscribe(
      res => {
        this.allUsers = res;
      },
      err => {
        alert ("Something goes wrong")
      }
    );
  }


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers()
  }

}

export interface UserViewModel {
fName:string;
lName:string;
age:string;

}
