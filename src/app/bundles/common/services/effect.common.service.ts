import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as _ from 'lodash';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class EffectCommonService {

  private state$: Observable<any>;
  private state: any;

  protected params = {
    storeKey: '',
    reducerFunctions: {
      setList: function(list) { return {type: '', payload: list}; },
      setWatchedId: function(watchedId) { return {type: '', payload: watchedId}; },
    }
  };

  constructor (protected store: Store<IRootStore>) {
    this.setParams();
    this.state$ = this.store.select(this.params.storeKey);
    this.state$.subscribe(value => {
      this.state = value;
    });
  }

  protected setParams() {}

  updateWatchedId(watchedId) {
    this.store.dispatch(this.params.reducerFunctions.setWatchedId(watchedId));
  }

  postOrUpdateList(list) {
    list.map(item => {
      if (!this.updateItem(item)) {
        this.postItem(item);
      }
    });
  }

  postList(list) {
    const newState = _.assignIn({}, this.state, { list: [...this.state.list, ...list] });
    this.store.dispatch(this.params.reducerFunctions.setList(newState.list));
  }

  updateList(list) {
    const newState = _.assignIn({}, this.state, { list: list });
    this.store.dispatch(this.params.reducerFunctions.setList(newState.list));
  }

  postItem(item) {
    const newState = _.assignIn({}, this.state, { list: [...this.state.list, item] });
    this.store.dispatch(this.params.reducerFunctions.setList(newState.list));
  }

  updateItem(item) {
    const newState = _.assignIn({}, this.state, { list: [...this.state.list] });
    const itemToUpdatePosition = newState.list.findIndex(listItem => listItem.getId() === item.getId());
    if ( itemToUpdatePosition !== -1) {
      newState.list[itemToUpdatePosition] = item;
      this.store.dispatch(this.params.reducerFunctions.setList(newState.list));
      return true;
    } else {
      return false;
    }
  }

  deleteItem(id) {
    const newState = _.assignIn({}, this.state, { list: [...this.state.list] });
    const itemToUpdatePosition = newState.list.findIndex(listItem => listItem.getId() === id);
    if ( itemToUpdatePosition !== -1) {
      newState.list = [
        ...newState.list.slice(0, itemToUpdatePosition),
        ...newState.list.slice(itemToUpdatePosition + 1)];
      this.store.dispatch(this.params.reducerFunctions.setList(newState.list));
    }
    // Todo: empty the watched id
  }

}

