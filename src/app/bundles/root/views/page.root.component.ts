import { Component } from '@angular/core';

@Component({
  selector: 'ori-page-root',
  template: `
        <div class="oriContainer">
          <ori-navigation-root></ori-navigation-root>
          <main>
            <router-outlet></router-outlet>
          </main>
        </div>
       
  `,
  styles:  []
})
export class PageRootComponent {}
