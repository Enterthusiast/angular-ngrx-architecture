import { Component } from '@angular/core';

@Component({
  selector: 'ori-page-root',
  template: `
    <h1>
      Angular Architecture + ngrx - WIP
    </h1>
    <ori-navigation-root></ori-navigation-root>
    <router-outlet></router-outlet>`,
  styles:  []
})
export class PageRootComponent {

  // Starting the routerCommonService so we can react to router change if required
  constructor(
    // private routerCommonService: RouterCommonService
  ) {}

}
