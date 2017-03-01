import { Action } from '@ngrx/store';

export function apiPeopleReducer(state: any[] = [], action: Action) {
  switch (action.type) {
    case 'API_PEOPLE_GET_PEOPLE':
      return action.payload;
    default:
      return state;
  }
}
