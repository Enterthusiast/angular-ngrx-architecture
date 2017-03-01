import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../../reducers/app-store.interface';

/* WIP */

@Injectable()
export class NavItemAppService {

  private routeMap: any;

  constructor(private store: Store<IAppStore>) {
    //this.routeMap = ;
  }

  setItems(): void {
    this.store.dispatch({ type: 'ROUTEMAP_SET_ROUTES', payload: this.routeMap });
  }

}
