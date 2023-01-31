import { Component } from '@angular/core';
import { Demandeintra } from '../interfaces/demandeintra';
import { DemandeintraService } from '../shared/demandeintra.service';
import { NgForm } from '@angular/forms';
import { Formation } from '../interfaces/formation';


@Component({
  selector: 'app-demandeintra',
  templateUrl: './demandeintra.component.html',
  styleUrls: ['./demandeintra.component.css']
})
export class DemandeintraComponent {
  demandeintra: Demandeintra = {};
  demandeintras: Demandeintra[] = [];
  formations: Formation[] = [];
  formation: Formation = {};
  interval!: NodeJS.Timer;


  constructor(private demandeintraService: DemandeintraService) { }

  ngOnInit() {
    this.getAll();
    this.interval = setInterval(() => {
      this.getAll();
    }, 5000);

    this.getAll2();
  }

  getAll() {
    this.demandeintraService.getAll().subscribe(res => {
      this.demandeintras = res;
    })
  }

  getAll2() {
    this.demandeintraService.getAllFormation().subscribe(res => {
      this.formations = res;
    })
  }

  getIdFormation(id: number) {
    this.demandeintraService.getOneFormation(id).subscribe(res => {
      this.formation = res;
      this.getAll2();
    })
  }

  add(form: NgForm) {

    var formationId = this.formation.id!;
    this.demandeintraService.getOneFormation(formationId).subscribe(res => {
      this.formation = res;
      this.getAll2();
      form.resetForm();
    })
    this.demandeintraService.add(formationId, this.demandeintra).subscribe(res => {
      this.getAll();
      form.resetForm();
    })
  }



  get(id: number) {
    this.demandeintraService.getOne(id).subscribe(res => {
      this.demandeintra = res;
      this.getAll();
    })
  }

  delete(id: number) {
    this.demandeintraService.delete(id).subscribe(data => {
      this.getAll();
    })
  }
}
