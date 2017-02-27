import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../reducers/app-store.interface';
import { routeMap } from '../../routers/routemap/routemap.const';

/* WIP */

@Injectable()
export class NavItemHomeService {

  private routeMap: any;

  constructor(private store: Store<IAppStore>) {
    this.routeMap = routeMap;
  }

  setItems(): void {
    this.store.dispatch({ type: 'NEW_TITLE', payload: this.routeMap });
  }

}
