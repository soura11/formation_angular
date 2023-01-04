import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  etudiants: number =332;
  dir:any = {prenom: 'Adrien'};

  user : User = {id : 1, name: 'John', email: 'john@yahoo.fr'}
  
  // ici on fait l injection de dependance du service router
  constructor(private router : Router){}


  afficheMessage(message: string): void {
    alert("mon message: " + message);
  }

  afficheMessage2(message: string, event:any): void {
    alert("mon message: " + message);
    event.preventDefault();
    event.stopPropagation();
  }

  quantites: number[] = [12, 189, 17, 12];

  users: User[] = [
    {id : 5, name: 'John', email: 'john@yahoo.fr'},
    {id : 6, name: 'momo', email: 'momo@yahoo.fr'},
    {id : 7, name: 'salma', email: 'salma@yahoo.fr'},
    {id : 8, name: 'lola', email: 'lola12@yahoo.fr'}
  ];

  data: any[] = [{
    "id": 1,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib1",
      "description":"desc1"
      }
  ]
  },
  {
    "id": 2,
    "name": "marc",
    "address": {
      "streetName": "4 rue paradis",
      "streetId": 13006
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib1",
      "description":"desc1"
      }
  ]
  }]

  position : number = 2;

  goTo(): void {
    this.router.navigate(['/form']);
  }

}
