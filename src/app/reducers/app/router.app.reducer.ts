/**
 *
 * This store is part of the router-store logic, check the router-store.module.ts file for more info
 *
 */

import { Action, State } from '@ngrx/store';

import * as _ from 'lodash';

export const ROUTER_NAVIGATION = 'ROUTER_NAVIGATION';

export class RouterState {
  public url: string;
}

export function routerNavigation(newRouterState) {
  return {type: ROUTER_NAVIGATION, payload: _.assignIn({}, newRouterState)};
}

export function routerReducer(state: RouterState = { url: '' }, action: Action) {
  switch (action.type) {
    case ROUTER_NAVIGATION: // 'ROUTER_NAVIGATION'
      return action.payload;
    default:
      return state;
  }
}
