import { Component } from '@angular/core';

import { RouteAppClass } from '../../../../classes/app/route/route.app.class';
import { RouteMapClass } from '../../../../classes/app/routemap/routemap.app.class';


@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <a *ngFor="let route of routeMap" routerLink="{{ route.link }}">{{ route.name }}</a>
  </nav>
  `,
  styles: []
})
export class AppNavComponent {

  private routeMap: any[];

  constructor() {
    this.routeMap = RouteMapClass.routeAppClassList();
    // this.routeMap = RouteMapClass.getRouteAppClassListFrom(['home', 'test']);
  }

}
