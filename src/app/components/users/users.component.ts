import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    {id : 5, name: 'John', email: 'john@yahoo.fr'},
    {id : 6, name: 'momo', email: 'momo@yahoo.fr'},
    {id : 7, name: 'salma', email: 'salma@yahoo.fr'},
    {id : 8, name: 'lola', email: 'lola12@yahoo.fr'}
  ];

  constructor(private router : Router) {}

  getUserDetails(userId : number){
    this.router.navigate(['/users', userId]);
  }

  
}
