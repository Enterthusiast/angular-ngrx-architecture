import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as _ from 'lodash';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {Observable} from 'rxjs/Observable';
import {peopleReducerSetList, peopleReducerSetWatchedId, PeopleState} from '../reducers/people.reducer';


@Injectable()
export class EffectPeopleService {

  private peopleState$: Observable<PeopleState>;
  private peopleState: PeopleState;

  constructor (private store: Store<IRootStore>) {
    this.peopleState$ = this.store.select('people');
    this.peopleState$.subscribe(value => {
      this.peopleState = value;
    });
  }

  peopleUpdateWatchedId(watchedId) {
    this.store.dispatch(peopleReducerSetWatchedId(watchedId));
  }

  peoplePostOrUpdateList(listPeople) {
    listPeople.map(itemPeople => {
      if (!this.peopleUpdateItem(itemPeople)) {
        this.peoplePostItem(itemPeople);
      }
    });
  }

  peoplePostList(listPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list, ...listPeople] });
    this.store.dispatch(peopleReducerSetList(newState.list));
  }

  peopleUpdateList(listPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: listPeople });
    this.store.dispatch(peopleReducerSetList(newState.list));
  }

  peoplePostItem(itemPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list, itemPeople] });
    this.store.dispatch(peopleReducerSetList(newState.list));
  }

  peopleUpdateItem(itemPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list] });
    const itemToUpdatePosition = newState.list.findIndex(item => item.getId() === itemPeople.getId());
    if ( itemToUpdatePosition !== -1) {
      newState.list[itemToUpdatePosition] = itemPeople;
      this.store.dispatch(peopleReducerSetList(newState.list));
      return true;
    } else {
      return false;
    }
  }

  peopleDeleteItem(id) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list] });
    const itemToUpdatePosition = newState.list.findIndex(item => item.getId() === id);
    if ( itemToUpdatePosition !== -1) {
      newState.list = [
        ...newState.list.slice(0, itemToUpdatePosition),
        ...newState.list.slice(itemToUpdatePosition + 1)];
      this.store.dispatch(peopleReducerSetList(newState.list));
    }
  }

}

