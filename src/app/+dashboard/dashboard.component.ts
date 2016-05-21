import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person, PersonService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  persons: Person[] = [];
  constructor(
    private _personService: PersonService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._personService.getPersons()
    .then(persons => this.persons = persons);
  }

}
