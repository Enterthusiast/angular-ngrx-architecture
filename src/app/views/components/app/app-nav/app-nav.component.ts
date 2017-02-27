import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <a *ngFor="let route of routeMap">{{ route }}</a>
  </nav>
  `,
  styles: []
})
export class AppNavComponent {

  private routeMap: any;

  constructor() {
    this.routeMap = [
      'link_placeholder_1'
      , 'link_placeholder_2'
      , 'link_placeholder_3'
    ]
  }

}
