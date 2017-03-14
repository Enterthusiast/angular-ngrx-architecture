import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as _ from 'lodash';

import { IAppStore } from '../../../reducers/app-store.interface';

@Injectable()
export class RouterCommonService {

  private router;
  private routerPreviousState;

  constructor(
    private store: Store<IAppStore>
    , private ngRouter: Router
  ) {
    this.router = store.select('router')
      .subscribe((routerState) => this.navigateOnRouterStateChange.bind(this)(_.assignIn({}, routerState)));
  }

  public navigate(routerState): void {
    this.ngRouter.navigate([decodeURIComponent(routerState.url)]);
  }

  private navigateOnRouterStateChange(routerState): void {
    if (routerState
      && (!this.routerPreviousState || this.routerPreviousState.url !== routerState.url)) {
      this.routerPreviousState = routerState;
      this.navigate(routerState);
    }
  }

}
