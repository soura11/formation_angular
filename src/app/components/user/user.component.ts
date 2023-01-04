import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// mettre 'implements OnInit' si sa ne fonctionne pas!
export class UserComponent {
  // Service qui permet de recuperer le parametre dans la route appelle
  constructor(private route: ActivatedRoute){}

  // methode du cycle de vie d'un composant
  // methode appelle a l initialisation du composant
  ngOnInit(){
    // Methode synchrone (affichage console.log dans la console)
    const id = this.route.snapshot.params["userId"];
    console.log(id);
  }

}
