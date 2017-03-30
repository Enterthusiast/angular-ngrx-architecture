import {Directive, EventEmitter, OnDestroy, Output} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {PeopleState} from '../reducers/people.reducer';
import {ItemPeopleClass} from '../models/item.people.class';
import {DecoratorPeopleService} from '../services/decorator.people.service';
import {ManagerPeopleService} from '../services/manager.people.service';
import {SubjectPeopleService} from '../services/subject.people.service';

@Directive({
  selector: '[ori-list-data-people]'
})
export class ListDataPeopleDirective implements OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemPeopleClass[]> = new EventEmitter();
  private peopleState$: Observable<PeopleState>;
  private peopleListSubscription: any;

  constructor (private subjectPeopleService: SubjectPeopleService,
               private managerPeopleService: ManagerPeopleService,
               private decoratorPeopleService: DecoratorPeopleService) {

    this.peopleState$ = subjectPeopleService.peopleState$;
    this.peopleListSubscription = this.peopleState$.subscribe((value) => {
      const list: ItemPeopleClass[] = value.list.map(peopleItem => {
        return this.decoratorPeopleService.addRouterLinks(peopleItem);
      });
      this.dataEmitter.emit([...list]);
    });

    this.getPeopleList();

  }

  private getPeopleList() {
    this.managerPeopleService.getList();
  }

  ngOnDestroy() {
    this.peopleListSubscription.unsubscribe();
  }

}
