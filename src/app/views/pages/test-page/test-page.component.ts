import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  template: `
    <p>
      test-page works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TestPageComponent {}
