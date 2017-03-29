import { Component } from '@angular/core';

@Component({
  selector: 'ori-test-page',
  template: `
    <p>
      test-page works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TestPageComponent { }
