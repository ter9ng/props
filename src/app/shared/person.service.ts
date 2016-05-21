import { Injectable } from '@angular/core';
import { Person } from './person.model';
@Injectable()
export class PersonService {

  constructor() {}
  
  getPersons(): Promise<Person[]>{
    return Promise.resolve(PERSONS);
  }
  
  getPerson(id: number): Promise<Person>{
    return Promise.resolve(PERSONS).then(
      persons => persons.filter(person => person.id === id)[0]
    );
  }

}

const PERSONS: Person[] = [
  {id: 0, name: 'Petter Petterson', imageUrl: 'www.bilde.bo', place: 1358},
  {id: 0, name: 'Ola Petterson', imageUrl: 'www.bilde.bo', place: 1337},
  {id: 0, name: 'Pirka Petterson', imageUrl: 'www.bilde.bo', place: 1221}
].map((person, index) => {
  person.id = index + 1;
  return person;
});
