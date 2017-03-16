import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../../../reducers/app-store.interface';
import * as _ from 'lodash';
import {FactoryPeopleService} from '../../../../../services/people/factory.people.service';
import {ItemPeopleClass} from "../../../../../models/people/item.people.class";

@Component({
  selector: 'ori-data-people-item',
  template: `
    <div>I'm a people-item</div>
    <ori-display-people-item [peopleItem]="currentPeopleItem"></ori-display-people-item>
  `,
  styles: []
})
export class ItemDataPeopleComponent {

  private peopleItem: Observable<any[]>;
  currentPeopleItem: ItemPeopleClass = new ItemPeopleClass({});

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ApiPeopleService) {

    this.peopleItem = store.select('peopleItem');

    this.peopleItem.subscribe(peopleItem => {
      this.currentPeopleItem = _.assignIn({}, peopleItem);
    });

    this.getPeopleItem();

  }

  private getPeopleItem() {
    this.apiPeopleService.getItem('47613944-a98d-4f94-8180-4925c498004a');
  }

  private postPeopleItem() {
    this.apiPeopleService.postItem(this.peopleItem);
  }

  private putPeopleItem() {
    this.peopleItem.subscribe(peopleItem => {
      const lastPeopleItem = _.assign({}, peopleItem);
      this.apiPeopleService.putItem(lastPeopleItem, '47613944-a98d-4f94-8180-4925c498004a');
    });
  }

}
