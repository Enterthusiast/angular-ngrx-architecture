/**
 *
 * File comming from https://github.com/vsavkin/router-store-prototype/blob/master/src/ngrx-store-router-module.ts
 *
 * A great way to get a store to manage the URL state,
 * Every url change go through the store, being from address bar or from a dispatch
 * Also the whole app can easily react to an URL change without being referenced, only listening to the router
 *
 *
 */

import { Injectable, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, ExtraOptions, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { Store } from '@ngrx/store';

import { routerNavigation } from '../../reducers/app/router.app.reducer';

@Injectable()
export class CanActivateChild_Internal implements CanActivateChild {
  private lastState: RouterStateSnapshot = null;

  constructor(@Optional() private store: Store<any>) {
    if (!store) {
      throw new Error('RouterConnectedToStoreModule can only be used in combination with StoreModule');
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.lastState
      || (this.lastState !== state && this.lastState.url !== state.url)) {
      this.lastState = state;
      this.store.dispatch(routerNavigation(state));
    }
    return true;
  }
}

export function wrapRoutes(routes: Routes): Routes {
  return [{path: '', canActivateChild: [CanActivateChild_Internal], children: routes}];
}

/**
 * Sets up the router module and wires it up to the store.
 *
 * Usage:
 *
 * ```typescript
 * @NgModule({
 *   declarations: [AppCmp, SimpleCmp],
 *   imports: [
 *     BrowserModule,
 *     StoreModule.provideStore({router: routerReducer}),
 *     RouterConnectedToStoreModule.forRoot([
 *       { path: '', component: SimpleCmp },
 *       { path: 'next', component: SimpleCmp }
 *     ], {useHash: true, initialNavigation: false})
 *   ],
 *   bootstrap: [AppCmp]
 * })
 * class AppModule {
 * }
 * ```
 */

@NgModule({})
export class RouterConnectedToStoreModule {
  static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders{
    return {
      ngModule: RouterModule,
      providers: [
        CanActivateChild_Internal,
        ...RouterModule.forRoot(wrapRoutes(routes), config).providers
      ]
    };
  }
  static forChild(routes: Routes): ModuleWithProviders{
    return {
      ngModule: RouterModule,
      providers: [
        CanActivateChild_Internal,
        ...RouterModule.forChild(wrapRoutes(routes)).providers
      ]
    };
  }
}
