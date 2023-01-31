import { Component } from '@angular/core';
import { Formation } from '../interfaces/formation';
import { Sessions } from '../interfaces/sessions';
import { SessionsService } from '../shared/sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent {
  session: Sessions = {};
  sessions: Sessions[] = [];
  formations: Formation[] = [];
 
  constructor(private sessionsService: SessionsService) {}
 
 ngOnInit(): void {
   this.getAll();
 
 }
 
  getAll() {
   this.sessionsService.getAllSession().subscribe(res => {
     this. sessions = res;
   })
 }
 
 

 getSessionsByFormationId(id: number){
  this.sessionsService.getSessionsByFormationId(id).subscribe(res => {
    this.sessions = res;
  })
 }
 
 }