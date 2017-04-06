import { Action } from '@ngrx/store';

import * as _ from 'lodash';

import {ItemJobPeopleClass} from '../models/item.job.people.class';


export const JOB_PEOPLE_SET_LIST = 'JOB_PEOPLE_SET_LIST';
export const JOB_PEOPLE_SET_WATCHEDID = 'JOB_PEOPLE_SET_WATCHEDID';

export function jobPeopleReducerSetList(newPeopleList: ItemJobPeopleClass[]) {
  return {type: JOB_PEOPLE_SET_LIST, payload: newPeopleList};
}
export function jobPeopleReducerSetWatchedId(newWatchedId) {
  return {type: JOB_PEOPLE_SET_WATCHEDID, payload: newWatchedId};
}

export interface JobPeopleState {
  list: ItemJobPeopleClass[];
  filters: string[];
  watchedId: string;
}

export const InitJobPeopleState = {
  list: [],
  filters: [],
  watchedId: ''
};

export function jobPeopleReducer(state: JobPeopleState = InitJobPeopleState, action: Action) {
  switch (action.type) {
    case JOB_PEOPLE_SET_LIST:
      return _.assignIn({}, state, { list: action.payload });
    case JOB_PEOPLE_SET_WATCHEDID:
      return _.assignIn({}, state, { watchedId: action.payload });
    default:
      return state;
  }
}
