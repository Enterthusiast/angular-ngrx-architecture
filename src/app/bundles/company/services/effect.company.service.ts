import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as _ from 'lodash';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {Observable} from 'rxjs/Observable';
import {companyReducerSetList, companyReducerSetWatchedId, CompanyState} from '../reducers/company.reducer';


@Injectable()
export class EffectCompanyService {

  private companyState$: Observable<CompanyState>;
  private companyState: CompanyState;

  constructor (private store: Store<IRootStore>) {
    this.companyState$ = this.store.select('company');
    this.companyState$.subscribe(value => {
      this.companyState = value;
    });
  }

  companyUpdateWatchedId(watchedId) {
    this.store.dispatch(companyReducerSetWatchedId(watchedId));
  }

  companyPostOrUpdateList(list) {
    list.map(item => {
      if (!this.companyUpdateItem(item)) {
        this.companyPostItem(item);
      }
    });
  }

  companyPostList(list) {
    const newState = _.assignIn({}, this.companyState, { list: [...this.companyState.list, ...list] });
    this.store.dispatch(companyReducerSetList(newState.list));
  }

  companyUpdateList(listCompany) {
    const newState = _.assignIn({}, this.companyState, { list: listCompany });
    this.store.dispatch(companyReducerSetList(newState.list));
  }

  companyPostItem(itemCompany) {
    const newState = _.assignIn({}, this.companyState, { list: [...this.companyState.list, itemCompany] });
    this.store.dispatch(companyReducerSetList(newState.list));
  }

  companyUpdateItem(itemCompany) {
    const newState = _.assignIn({}, this.companyState, { list: [...this.companyState.list] });
    const itemToUpdatePosition = newState.list.findIndex(item => item.getId() === itemCompany.getId());
    if ( itemToUpdatePosition !== -1) {
      newState.list[itemToUpdatePosition] = itemCompany;
      this.store.dispatch(companyReducerSetList(newState.list));
      return true;
    } else {
      return false;
    }
  }

  companyDeleteItem(id) {
    const newState = _.assignIn({}, this.companyState, { list: [...this.companyState.list] });
    const itemToUpdatePosition = newState.list.findIndex(item => item.getId() === id);
    if ( itemToUpdatePosition !== -1) {
      newState.list = [
        ...newState.list.slice(0, itemToUpdatePosition),
        ...newState.list.slice(itemToUpdatePosition + 1)];
      this.store.dispatch(companyReducerSetList(newState.list));
    }
  }

}

