import { Component } from '@angular/core';

@Component({
  selector: 'ori-page-root',
  template: `
    <h1>
      Angular Architecture + ngrx - WIP
    </h1>
    <div class="col-md-2">
      <ori-navigation-root></ori-navigation-root>
    </div>
    <div class="col-md-10">
    <router-outlet></router-outlet>
    </div>
  `,
  styles:  []
})
export class PageRootComponent {}
