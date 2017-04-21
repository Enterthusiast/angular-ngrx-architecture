import {Action} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

import * as _ from 'lodash';


export const ACTIVATEDROUTE_ROOT_SET_ITEM = 'ROOT_SET_ACTIVATEDROUTE';

export function activatedRouteRootSetItem(activatedRoute: ActivatedRoute) {
  return {type: ACTIVATEDROUTE_ROOT_SET_ITEM, payload: activatedRoute};
}

export interface ActivatedRouteRootState {
  activatedRoute: ActivatedRoute;
}

export const InitActivatedRouteRootState = {
  activatedRoute: <ActivatedRoute> new ActivatedRoute()
};

export function ActivatedRouteRootReducer(state: ActivatedRouteRootState = InitActivatedRouteRootState, action: Action) {
  switch (action.type) {
    case ACTIVATEDROUTE_ROOT_SET_ITEM:
      return _.assignIn({}, { activatedRoute: action.payload });
    default:
      return state;
  }
}
