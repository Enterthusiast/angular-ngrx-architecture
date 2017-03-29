import {Directive, EventEmitter, OnDestroy, Output} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {PeopleState} from '../../../../../reducers/people/list.people.reducer';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {DecoratorPeopleService} from '../../../../../services/people/decorator.people.service';
import {ManagerPeopleService} from '../../../../../services/people/manager.people.service';
import {SubjectPeopleService} from '../../../../../services/people/subject.people.service';

@Directive({
  selector: '[ori-data-people-list]'
})
export class ListDataPeopleDirective implements OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemPeopleClass[]> = new EventEmitter();
  private peopleList$: Observable<PeopleState>;
  private peopleListSubscription: any;

  constructor (private subjectPeopleService: SubjectPeopleService,
               private managerPeopleService: ManagerPeopleService,
               private decoratorPeopleService: DecoratorPeopleService) {

    this.peopleList$ = subjectPeopleService.peopleState$;
    this.peopleListSubscription = this.peopleList$.subscribe((value) => {
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
