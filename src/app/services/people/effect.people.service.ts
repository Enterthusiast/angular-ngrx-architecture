import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as _ from 'lodash';

import {IAppStore} from '../../reducers/app-store.interface';
import {Observable} from 'rxjs/Observable';
import {peopleSetList, PeopleState} from '../../reducers/people/list.people.reducer';

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

  peopleUpdateItem(itemPeople) {
    const newState = _.assignIn({}, this.peopleState, { list: [...this.peopleState.list] });
    const itemToUpdatePosition = newState.list.findIndex(item => item.getId() === itemPeople.getId());
    if ( itemToUpdatePosition !== -1) {
      newState.list[itemToUpdatePosition] = itemPeople;
      this.store.dispatch(peopleSetList(newState.list));
    }
  }

}

