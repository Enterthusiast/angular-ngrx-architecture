import {Directive} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Store} from '@ngrx/store';

import {activatedRouteRootSetItem} from '../reducers/activatedRoute.root.reducer';
import {IRootStore} from '../reducers/root.store.interface';


@Directive({
  selector: '[ori-activatedroute-data-root]'
})
export class ActivatedRouteRootDirective {

  private routeParamsSubscription: any;

  constructor (public store: Store<IRootStore>,
               public route: ActivatedRoute) {

    this.routeParamsSubscription = this.route.params.subscribe((params: Params) => {
      this.store.dispatch(activatedRouteRootSetItem(this.route));
    });

  }

}
