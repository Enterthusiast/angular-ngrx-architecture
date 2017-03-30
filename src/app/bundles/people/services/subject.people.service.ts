import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {ItemPeopleClass} from '../models/item.people.class';
import {PeopleState} from '../reducers/people.reducer';
import {ManagerPeopleService} from './manager.people.service';

@Injectable()
export class SubjectPeopleService {

  peopleState$: Observable<PeopleState>;
  watchedPeopleItem$: Subject<ItemPeopleClass> = new Subject();

  constructor (private store: Store<IRootStore>,
               private managerPeopleService: ManagerPeopleService) {
    this.peopleState$ = this.store.select('people');
    this.createWatchedIdSubject();
  }

  private createWatchedIdSubject() {
    this.peopleState$.subscribe(value => {
      let result;
      if (value.watchedId) {
        result = value.list.find(peopleItem => {
          return peopleItem.getId() === value.watchedId;
        });
        if (result) {
          this.watchedPeopleItem$.next(result);
        } else {
          this.managerPeopleService.getItem(value.watchedId);
        }
      }
    });
  }

}

