import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../../../reducers/app-store.interface';
import { ApiPeopleService } from '../../../../../services/people/api.people.service';
import {PeopleState} from '../../../../../reducers/people/list.people.reducer';

@Component({
  selector: 'ori-data-people-list',
  template: `
    <div class="col-md-6">
      <ori-display-people-list [peopleList]="peopleList"></ori-display-people-list>
      <ori-data-people-list-item *ngFor="let peopleItem of peopleList" [peopleItem]="peopleItem"></ori-data-people-list-item>
    </div>
    <div class="col-md-6">
      <div class="fixed">
        <router-outlet name="action"></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .fixed {
      display: block;
      position: fixed;
      top: 128px;
      left: 50%;
      width: 50%;
    }
    .block {
      display: block;
    }
    .inlineblock {
      display: inline-block;
      vertical-align: top;
    }
  `]
})
export class ListDataPeopleComponent {

  private peopleList$: Observable<PeopleState>;
  peopleList: any[];

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ApiPeopleService) {

    this.peopleList$ = store.select('peopleList');
    this.peopleList$.subscribe((value) => {
      this.peopleList = [...value.list];
    });
    this.getPeopleList();

  }

  private getPeopleList() {
    this.apiPeopleService.getList();
  }

}
