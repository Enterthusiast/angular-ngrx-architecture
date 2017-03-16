import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../../../reducers/app-store.interface';

import { ApiPeopleService } from '../../../../../services/people/api.people.service';

@Component({
  selector: 'ori-data-people-list',
  template: `
    <div>ListDataPeopleComponent</div>
    <ori-display-people-list [peopleList]="peopleList | async"></ori-display-people-list>
  `,
  styles: []
})
export class ListDataPeopleComponent {

  peopleList: Observable<any[]>;

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ApiPeopleService) {

    this.peopleList = store.select('peopleList');
    this.getPeopleList();

  }

  private getPeopleList() {
    this.apiPeopleService.getList();
  }


}
