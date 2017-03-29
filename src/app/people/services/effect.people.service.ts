import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as _ from 'lodash';

import {IAppStore} from '../../reducers/app-store.interface';
import {Observable} from 'rxjs/Observable';
import {peopleSetList, peopleSetWatchedId, PeopleState} from '../reducers/list.people.reducer';


@Injectable()
export class EffectPeopleService {

  private peopleState$: Observable<PeopleState>;
  private peopleState: PeopleState;

  constructor (private store: Store<IAppStore>) {
    this.peopleState$ = this.store.select('peopleList');
    this.peopleListSubscription();
  }

  private peopleListSubscription() {
    this.peopleState$.subscribe(value => {
      this.peopleState = value;
    });
  }

  peopleUpdateWatchedId(watchedId) {
    this.store.dispatch(peopleSetWatchedId(watchedId));
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
    this.store.dispatch(peopleSetList(newState.list));
  }

  peopleUpdateList(listPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: listPeople });
    this.store.dispatch(peopleSetList(newState.list));
  }

  peoplePostItem(itemPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list, itemPeople] });
    this.store.dispatch(peopleSetList(newState.list));
  }

  peopleUpdateItem(itemPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list] });
    const itemToUpdatePosition = newState.list.findIndex(item => item.getId() === itemPeople.getId());
    if ( itemToUpdatePosition !== -1) {
      newState.list[itemToUpdatePosition] = itemPeople;
      this.store.dispatch(peopleSetList(newState.list));
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
      this.store.dispatch(peopleSetList(newState.list));
    }
  }

}

