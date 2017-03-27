import {Component, Directive, EventEmitter, Output} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { IAppStore } from '../../../../../reducers/app-store.interface';
import { ApiPeopleService } from '../../../../../services/people/api.people.service';
import {PeopleState} from '../../../../../reducers/people/list.people.reducer';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {DecoratorPeopleService} from '../../../../../services/people/decorator.people.service';

@Directive({
  selector: '[ori-data-people-list]'
})
export class ListDataPeopleDirective {

  @Output() dataEmitter: EventEmitter<ItemPeopleClass[]> = new EventEmitter();
  private peopleList$: Observable<PeopleState>;

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ApiPeopleService,
               private decoratorPeopleService: DecoratorPeopleService) {

    this.peopleList$ = store.select('peopleList');
    this.peopleList$.subscribe((value) => {
      const list: ItemPeopleClass[] = value.list.map(peopleItem => {
        return this.decoratorPeopleService.addRouterLinks(peopleItem);
      });
      this.dataEmitter.emit([...list]);
    });

    this.getPeopleList();

  }

  private getPeopleList() {
    this.apiPeopleService.getList();
  }

}
