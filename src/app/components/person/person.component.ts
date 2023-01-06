import { Component } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/shared/person.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  personne : Person = {};
  personnes: Array<Person> = new Array<Person>();
  interval!: NodeJS.Timer;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getAll();
    this.interval = setInterval(() => { 
      this.getAll(); 
  }, 5000);
  }

  getAll() {
    this.personService.getAll().subscribe(res => {
      this.personnes = res;
      console.log(res);
    })
  }

  add(form: NgForm) {
    if(this.personne.id != null){
      this.personService.update(this.personne.id, this.personne).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    } else {
      this.personService.add(this.personne).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    }     
  }

  delete(id: number) {
    this.personService.delete(id).subscribe(data => {
      this.getAll();
    })   
  }

  get(id: number) {
    this.personService.getOne(id).subscribe(res => {
      this.personne = res;
      this.getAll();
    })
  }
}
