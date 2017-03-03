/**
 *
 * This store is part of the router-store logic, check the router-store.module.ts file for more info
 *
 */

import { Action, State } from '@ngrx/store';

import { ROUTER_NAVIGATION } from '../../routers/router-store/router-store.module';

export function routerAppReducer(state: State<any>, action: Action) {
  switch (action.type) {
    case ROUTER_NAVIGATION: // 'ROUTER_NAVIGATION'
      return action.payload;
    default:
      return state;
  }
}
