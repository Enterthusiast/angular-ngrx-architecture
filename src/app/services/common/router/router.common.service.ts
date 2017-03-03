import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../../reducers/app-store.interface';

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
    this.router.navigate([decodeURIComponent(routerState.url)]);
  }

  private navigateOnRouterStateChange(routerState): void {
    if(routerState
      && (!this.routerStorePreviousState || this.routerStorePreviousState.url !== routerState.url)) {
      this.routerStorePreviousState = routerState;
      this.navigate(routerState);
    }
  }

}
