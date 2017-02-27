import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Hello World
    </h1>
    <app-nav></app-nav>
    <router-outlet></router-outlet>`,
  styles:  []
})
export class AppComponent {}
