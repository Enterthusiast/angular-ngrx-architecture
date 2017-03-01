import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../../../reducers/app-store.interface';

import { ApiPeopleService } from '../../../../../services/people/api/api.people.service';

@Component({
  selector: 'app-data-people-list',
  template: `
    <div>ListDataPeopleComponent</div>
    <app-display-people-list [peopleList]="peoples | async"></app-display-people-list>
  `,
  styles: []
})
export class ListDataPeopleComponent {
  peoples: Observable<any[]>;

  constructor (
    private store: Store<IAppStore>
    , private apiPeopleService: ApiPeopleService
  ) {

    this.peoples = store.select('people');
    this.getPeopleList();

  }

  getPeopleList() {

    this.apiPeopleService.getPeopleList();

  }


}
