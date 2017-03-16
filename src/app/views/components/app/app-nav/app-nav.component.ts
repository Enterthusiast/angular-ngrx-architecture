import { Component } from '@angular/core';

import { RouteAppClass } from '../../../../models/app/route/route.app.class';
import { RouteMapController } from '../../../../controllers/app/route-map/route-map.app.controller';


@Component({
  selector: 'ori-nav',
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
export class AppNavComponent {

  private routeMap: any[];

  constructor() {
    this.routeMap = RouteMapController.routeAppClassList();
    // this.routeMap = RouteMapController.getRouteAppClassListFrom(['home', 'test']);
  }

}
