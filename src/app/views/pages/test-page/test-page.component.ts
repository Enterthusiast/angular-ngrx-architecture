import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../reducers/app-store.interface';

import { RouterCommonService } from '../../../services/common/router/router.common.service';

@Component({
  selector: 'app-test-page',
  template: `
    <p>
      test-page works!
    </p>
    <p>The router-store url is {{ (router | async).url }} </p>
    <input type="text" [(ngModel)]="nextUrl">
     <button (click)="changeUrl()">Change URL</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TestPageComponent {
  router: Observable<any[]>;
  nextUrl: string;

  constructor (
    private store: Store<IAppStore>
    , private routerCommonService: RouterCommonService
  ) {

    this.router = store.select('router');

  }

  changeUrl() {

    this.routerCommonService.navigate(Object.assign({}, this.router, { url: this.nextUrl }));

  }

}
