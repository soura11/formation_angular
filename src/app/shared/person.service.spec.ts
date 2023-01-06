import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService } from './person.service';
import { Person } from '../interfaces/person';


describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  // methode appele avant chaque test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // injection des service
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('#getAll', () => {
    it('should return an Observable<Person[]>', () => {
      
      const dummyPersonnes: Array<Person>  = [
        { id: 1, firstName: 'Doe', lastName:'John' },
        { id: 1, firstName: 'Doe', lastName:'John' },
      ];
  
      service.getAll().subscribe(personnes => {
        expect(personnes.length).toBe(2);
        expect(personnes).toEqual(dummyPersonnes);
      });
  
      // simule les requêtes
      const req = httpMock.expectOne(`http://localhost:8080/persons`);
      expect(req.request.method).toBe("GET");
      // fournit des valeurs factices comme réponses
      req.flush(dummyPersonnes);
    });
  });

  describe('#add', () => {
    it('should return an Observable<Person>', () => {
  
      const dummyPersonne: Person= {id: 1, firstName: 'Doe', lastName:'John'};
  
      service.add(dummyPersonne).subscribe(personne => {
        expect(personne.lastName).toBe('John');
        expect(personne).toEqual(dummyPersonne);
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyPersonne);
    });
  });

  describe('#delete', () => {
    it('should return an Observable<Person>', () => {
  
      const dummyPersonne: Person= {id: 1, firstName: 'Doe', lastName:'John'};
  
      service.delete(dummyPersonne.id!).subscribe(personne => {
        expect(personne.id).toBe(1);
      
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons/1`);
      expect(req.request.method).toBe("DELETE");
      req.flush(dummyPersonne);
    });
  });

  describe('#update', () => {
    it('should return an Observable<Person>', () => {
  
      const dummyPersonne: Person= {id: 1, firstName: 'Doe', lastName:'Mick'};
  
      service.update(dummyPersonne.id!,dummyPersonne).subscribe(personne => {
        expect(personne.firstName).toBe('Doe');
        expect(personne.id).toBe(1);
      
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons/1`);
      expect(req.request.method).toBe("PUT");
      req.flush(dummyPersonne);
    });
  });

  describe('#getOne', () => {
    it('should return an Observable<Person>', () => {
  
      const dummyPersonne: Person= {id: 1, firstName: 'Doe', lastName:'John'};
  
      service.getOne(dummyPersonne.id!).subscribe(personne => {
        expect(personne.firstName).toBe('Doe');
        expect(personne).toEqual(dummyPersonne);
        expect(personne.id).toBe(1);
      
      });
  
      const req = httpMock.expectOne(`http://localhost:8080/persons/1`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyPersonne);
    });
  });

});

