import { Action } from '@ngrx/store';

import * as _ from 'lodash';

import {ItemCompanyClass} from '../models/item.company.class';


export const COMPANY_SET_LIST = 'COMPANY_SET_LIST';
export const COMPANY_SET_WATCHEDID = 'COMPANY_SET_WATCHEDID';

export function companyReducerSetList(newCompanyList: ItemCompanyClass[]) {
  return {type: COMPANY_SET_LIST, payload: newCompanyList};
}
export function companyReducerSetWatchedId(newWatchedId) {
  return {type: COMPANY_SET_WATCHEDID, payload: newWatchedId};
}

export interface CompanyState {
  list: ItemCompanyClass[];
  filters: string[];
  watchedId: string;
}

export const InitCompanyState = {
  list: [],
  filters: [],
  watchedId: ''
};

export function companyReducer(state: CompanyState = InitCompanyState, action: Action) {
  switch (action.type) {
    case COMPANY_SET_LIST:
      return _.assignIn({}, state, { list: action.payload });
    case COMPANY_SET_WATCHEDID:
      return _.assignIn({}, state, { watchedId: action.payload });
    default:
      return state;
  }
}
