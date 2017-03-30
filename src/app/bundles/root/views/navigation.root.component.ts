import { Component } from '@angular/core';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';


@Component({
  selector: 'ori-navigation-root',
  template: `
  <nav>
    <a class="app-nav-li" *ngFor="let route of routeMap" routerLink="{{ route.link }}" routerLinkActive="active">{{ route.name }}</a><br>
  </nav>
  `,
  styles: [`
    .app-nav-li {
        margin: 0 5px 0 5px;
    }
    .active {
      color: green;
    }
  `]
})
export class NavigationRootComponent {

  private routeMap: any[];

  constructor() {
    this.routeMap = RouteMapController.routeAppClassList();
    // this.routeMap = RouteMapController.getRouteAppClassListFrom(['root', 'test']);
  }

}
