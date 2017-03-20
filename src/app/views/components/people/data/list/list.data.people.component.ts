import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../../../reducers/app-store.interface';

import { ApiPeopleService } from '../../../../../services/people/api.people.service';
import {ItemPeopleClass} from "../../../../../models/people/item.people.class";

@Component({
  selector: 'ori-data-people-list',
  template: `
    <div>ListDataPeopleComponent</div>
    <ori-display-people-list [peopleList]="peopleList"></ori-display-people-list>
    <ori-data-people-list-item *ngFor="let peopleItem of peopleList" [peopleItem]="peopleItem"></ori-data-people-list-item>
  `,
  styles: []
})
export class ListDataPeopleComponent {

  private peopleList$: Observable<ItemPeopleClass[]>;
  peopleList: any[];

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ApiPeopleService) {

    this.peopleList$ = store.select('peopleList');
    this.peopleList$.subscribe((list) => {
      this.peopleList = [...list];
    });
    this.getPeopleList();

  }

  private getPeopleList() {
    this.apiPeopleService.getList();
  }

}
