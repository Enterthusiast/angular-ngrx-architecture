import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../../reducers/app-store.interface';

import { ROUTER_NAVIGATION } from '../../../routers/router-store/router-store.module';

@Injectable()
export class RouterCommonService {

  private routerStore;
  private routerStorePreviousState;

  constructor(
    private store: Store<IAppStore>
    , private router: Router
  ) {

    this.routerStore = store.select('router')
      .subscribe(this.navigateOnRouterStateChange.bind(this));

  }

  public navigate(routerState): void {
    // if the url has a special char things go ugly, we must fix that
    // because the special char are constantly reencoded adding new character to encode...
    this.router.navigate([routerState.url]);
  }

  private navigateOnRouterStateChange(routerState): void {
    if(!this.routerStorePreviousState
      || this.routerStorePreviousState.url !== routerState.url) {
      this.routerStorePreviousState = routerState;
      this.navigate(routerState);
    }
  }

}
