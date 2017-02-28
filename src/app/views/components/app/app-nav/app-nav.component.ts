import { Component } from '@angular/core';

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

  private routeMap: any;

  constructor() {
    this.routeMap = [
      { name: 'name_placeholder_1', link: 'link_placeholder_1'}
      , { name: 'name_placeholder_2', link: 'link_placeholder_2'}
      , { name: 'name_placeholder_3', link: 'link_placeholder_3'}
    ]
  }

}
