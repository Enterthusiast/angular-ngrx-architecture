import { Component } from '@angular/core';

@Component({
  selector: 'ori-root',
  template: `
    <h1>
      Angular Architecture + ngrx - WIP
    </h1>
    <ori-nav></ori-nav>
    <router-outlet></router-outlet>`,
  styles:  []
})
export class AppPageComponent {

  // Starting the routerCommonService so we can react to router change if required
  constructor(
    // private routerCommonService: RouterCommonService
  ) {}

}
