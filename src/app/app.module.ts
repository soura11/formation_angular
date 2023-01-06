import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    HomeComponent,
    NotFoundComponent,
    UsersComponent,
    UserComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    ReactiveFormComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Module qui nous permet de faire des formulaires
    //de type Template-driven-form
    FormsModule,
    // 2 eme Module qui nous permet de faire des formulaires
    //de type Reactive
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
