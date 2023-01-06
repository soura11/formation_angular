import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes =[
  {path:"", component: HomeComponent},
  {path: "form", component: FormulaireComponent},
  {path: "404", component: NotFoundComponent},
  {path: "users", component: UsersComponent},
  {path: "users/:userId", component: UserComponent},
  {path: "react", component: ReactiveFormComponent},
  {path: "person", component: PersonComponent},

  // toujours placer en dernier
  {path: "**", redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
