import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  email!: string;
  password!: string;

  tab: Array<{email: string, password: string}> = [];

  register() {
    const obj: {email: string, password: string} = { email: this.email , password: this.password };
    console.log(obj);
    this.tab.push(obj);
    this.tab.forEach(i => console.log(i));
    this.email = '';
    this.password = '';
  }

  delete(obj: {email: string, password: string}) {
    const index: number = this.tab.indexOf(obj);
    this.tab.splice(index, 1);
  }
}

  


