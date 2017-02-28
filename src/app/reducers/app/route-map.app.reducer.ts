import { Action } from '@ngrx/store';
import { RouteAppClass } from '../../classes/app/route/route.app.class';

export function routeMapAppReducer(state: RouteAppClass[], action: Action) {
  switch (action.type) {
    case 'APP_ROUTEMAP_SET_ROUTEMAP':
      return action.payload;
    default:
      return state;
  }
}
