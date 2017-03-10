/**
 *
 * This store is part of the router-store logic, check the router-store.module.ts file for more info
 *
 */

import { Action, State } from '@ngrx/store';

export const ROUTER_NAVIGATION = 'ROUTER_NAVIGATION';

export function routerNavigation(newRouterState) {
  return {type: ROUTER_NAVIGATION, payload: newRouterState};
}

export function routerReducer(state: State<any>, action: Action) {
  switch (action.type) {
    case ROUTER_NAVIGATION: // 'ROUTER_NAVIGATION'
      return action.payload;
    default:
      return state;
  }
}
