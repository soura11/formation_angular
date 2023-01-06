import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Person } from '../interfaces/person';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root' 
})
export class PersonService {

  //L URL qui sera utiliser par le client pour realisze des requetes HTTP
  url: string = 'http://localhost:8080/persons';

  //Injecter le service HttpClient
  constructor(private http: HttpClient) { }

  //Recupere la liste de personne
  getAll(): Observable<Person[]> {
    let API_URL = `${this.url}`;
    return this.http.get<Array<Person>>(API_URL)
    .pipe(
      map((res:any) => {
        return res || [];
      }),
      catchError(this.errorMgmt)
    );
  }

  getOne(id: number): Observable<Person>  {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
    .pipe(
      map((res:any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    );
  }

  add(p: Person): Observable<Person> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, p)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  update(id: number, p: Person):Observable<Person> {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, p)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  update2 = (id:number, data: Person): Observable<Person> => {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  delete(id: number):Observable<Person> {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    );
  }

  delete2 = (id:number): Observable<Person> => {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
