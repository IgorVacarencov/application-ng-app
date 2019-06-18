import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
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



  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}

export interface UserViewModel {
fName:string;
lName:string;
age:string;

}
