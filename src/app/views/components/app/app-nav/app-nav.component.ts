import { Component } from '@angular/core';

import { RouteAppClass } from '../../../../classes/app/route/route.app.class';
import { RouteMapClass } from '../../../../classes/app/routemap/routemap.app.class';


@Component({
  selector: 'app-nav',
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
    this.routeMap = RouteMapClass.routeAppClassList();
    // this.routeMap = RouteMapClass.getRouteAppClassListFrom(['home', 'test']);
  }

}
