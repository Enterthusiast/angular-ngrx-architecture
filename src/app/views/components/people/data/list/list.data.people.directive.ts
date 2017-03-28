import {Directive, EventEmitter, OnDestroy, Output} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {IAppStore} from '../../../../../reducers/app-store.interface';
import {PeopleState} from '../../../../../reducers/people/list.people.reducer';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {DecoratorPeopleService} from '../../../../../services/people/decorator.people.service';
import {ManagerPeopleService} from '../../../../../services/people/manager.people.service';

@Directive({
  selector: '[ori-data-people-list]'
})
export class ListDataPeopleDirective implements OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemPeopleClass[]> = new EventEmitter();
  private peopleList$: Observable<PeopleState>;
  private peopleListSubscription: any;

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ManagerPeopleService,
               private decoratorPeopleService: DecoratorPeopleService) {

    this.peopleList$ = store.select('peopleList');
    this.peopleListSubscription = this.peopleList$.subscribe((value) => {
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

  ngOnDestroy() {
    this.peopleListSubscription.unsubscribe();
  }

}
