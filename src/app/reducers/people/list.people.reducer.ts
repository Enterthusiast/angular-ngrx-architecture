import { Action } from '@ngrx/store';

import * as _ from 'lodash';

export const PEOPLE_LIST_SET_LIST = 'PEOPLE_LIST_SET_LIST';

export function peopleListSetList(newPeopleList) {
  return {type: PEOPLE_LIST_SET_LIST, payload: [...newPeopleList]};
}

export function peopleListReducer(state: any[] = [], action: Action) {
  switch (action.type) {
    case 'PEOPLE_LIST_SET_LIST':
      return action.payload;
    default:
      return state;
  }
}
