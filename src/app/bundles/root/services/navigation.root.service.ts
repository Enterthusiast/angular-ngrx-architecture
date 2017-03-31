import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {NavigationRootConfig} from '../../../configs/navigation/navigation.root.config';
import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';
import {ItemNavigationRootClass} from '../models/item.navigation.root.class';


@Injectable()
export class NavigationRootService {

  getNavRouteList() {
    return this.buildNavRouteList(NavigationRootConfig);
  }

  private buildNavRouteList(listNav) {
    return listNav.map(rootItem => {
      rootItem.children = rootItem.children
        .map(children => {
          return RouteMapController.getRouteAppClass(children.routerId);
        });
      return rootItem as ItemNavigationRootClass;
    });
  }

}
