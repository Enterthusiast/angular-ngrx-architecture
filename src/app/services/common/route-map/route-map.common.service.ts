import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../../reducers/app-store.interface';
import { routemapLinks } from '../../../routers/config/routemap-links.const';
import { RouteAppClass } from '../../../classes/app/route/route.app.class';

/* WIP */

@Injectable()
export class RouteMapCommonService {

  constructor(
    private store: Store<IAppStore>
    , private routes: RouteAppClass[]
    , private routeMap: any
  ) {}

  createRoutes(): RouteAppClass[] {

    if(this.routeMap) {

    } else {
      this.routeMap = routemapLinks;
    }

    return this.routes;

  }

  setRoutes(): void {
    this.store.dispatch({ type: 'ROUTEMAP_SET_ROUTES', payload: this.routeMap });
  }

}
