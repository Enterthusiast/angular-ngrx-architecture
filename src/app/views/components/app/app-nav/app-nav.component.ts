import { Component } from '@angular/core';

import { RouteAppClass } from '../../../../classes/app/route/route.app.class';
import { RouteMap } from '../../../../classes/app/routemap/routemap.app.class';


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

  private routeMap: RouteAppClass[];

  constructor() {

    this.routeMap = RouteMap.routes;

  }

}
