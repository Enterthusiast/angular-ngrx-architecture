import { Component } from '@angular/core';
import { RouterCommonService } from '../../../services/common/router/router.common.service';

@Component({
  selector: 'ori-root',
  template: `
    <h1>
      Hello World
    </h1>
    <ori-nav></ori-nav>
    <router-outlet></router-outlet>`,
  styles:  []
})
export class AppPageComponent {

  // Starting the routerCommonService so we can react to router change if required
  constructor(private routerCommonService: RouterCommonService) {}

}
