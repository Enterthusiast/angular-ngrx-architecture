import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {IAppStore} from '../../reducers/app-store.interface';
import {ItemPeopleClass} from '../../models/people/item.people.class';
import {PeopleState} from '../../reducers/people/list.people.reducer';
import {ManagerPeopleService} from './manager.people.service';

@Injectable()
export class SubjectPeopleService {

  private peopleState$: Observable<PeopleState>;
  watchedPeopleItem$: Subject<ItemPeopleClass> = new Subject();

  constructor (private store: Store<IAppStore>,
               private apiPeopleService: ManagerPeopleService) {
    this.peopleState$ = this.store.select('peopleList');
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
          this.apiPeopleService.getItem(value.watchedId);
        }
      }
    });
  }

}

