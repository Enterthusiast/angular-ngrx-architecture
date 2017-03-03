import { Component } from '@angular/core';
import {RouterCommonService} from "../../../services/common/router/router.common.service";

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
export class AppComponent {

  // Starting the routerCommonService so we can react to router change if required
  constructor(private routerCommonService: RouterCommonService) {}

}
