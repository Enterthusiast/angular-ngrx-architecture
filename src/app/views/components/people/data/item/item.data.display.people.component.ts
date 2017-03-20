import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../../../reducers/app-store.interface';
import * as _ from 'lodash';
import {FactoryPeopleService} from '../../../../../services/people/factory.people.service';
import {ItemPeopleClass} from "../../../../../models/people/item.people.class";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'ori-data-people-display-item',
  template: `
    <div>I'm a people-item</div>
    <ori-display-people-item [peopleItem]="peopleItem"></ori-display-people-item>
  `,
  styles: []
})
export class ItemDataDisplayPeopleComponent implements OnInit {

  private peopleItem$: Observable<any[]>;
  peopleItem: ItemPeopleClass = new ItemPeopleClass({});

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ApiPeopleService,
               private route: ActivatedRoute) {

    this.peopleItem$ = store.select('peopleItem');

    this.peopleItem$.subscribe(peopleItem => {
      this.setCurrentPeopleItem(peopleItem);
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getPeopleItem(params['id']);
    });
  }

  private setCurrentPeopleItem(peopleItem) {
    this.peopleItem = _.assignIn({}, peopleItem);
  }

  private getPeopleItem(id) {
    this.apiPeopleService.getItem(id);
  }

}
