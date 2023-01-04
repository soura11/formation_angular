import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  log!: string ;
  pwd!: string;
  data: any[] =[]

  constructor(){}
  register() {
    // Méthode appelé lors de la soumission
    console.log(this.log, this.pwd);
    this.data.push(this.log);
  }


  

}
