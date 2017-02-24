import { Action } from '@ngrx/store';

export function titleReducer(state: string = 'Hello World', action: Action) {
  switch (action.type) {
    case 'NEW_TITLE':
      return action.payload;
    case 'NEW_TITLE_WITH_QUESTION_MARK':
      return action.payload + '?';
    default:
      return state;
  }
}
