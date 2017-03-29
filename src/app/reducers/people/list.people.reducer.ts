import { Action } from '@ngrx/store';

import * as _ from 'lodash';
import {ItemPeopleClass} from '../../models/people/item.people.class';

export const PEOPLE_SET_LIST = 'PEOPLE_SET_LIST';
export const PEOPLE_SET_WATCHEDID = 'PEOPLE_SET_WATCHEDID';

export function peopleSetList(newPeopleList: ItemPeopleClass[]) {
  return {type: PEOPLE_SET_LIST, payload: newPeopleList};
}
export function peopleSetWatchedId(newWatchedId) {
  return {type: PEOPLE_SET_WATCHEDID, payload: newWatchedId};
}

export interface PeopleState {
  list: ItemPeopleClass[];
  filters: string[];
  watchedId: string;
}

export const InitPeopleState = {
  list: [],
  filters: [],
  watchedId: ''
};

export function peopleListReducer(state: PeopleState = InitPeopleState, action: Action) {
  switch (action.type) {
    case PEOPLE_SET_LIST:
      return _.assignIn({}, state, { list: action.payload });
    case PEOPLE_SET_WATCHEDID:
      return _.assignIn({}, state, { watchedId: action.payload });
    default:
      return state;
  }
}
