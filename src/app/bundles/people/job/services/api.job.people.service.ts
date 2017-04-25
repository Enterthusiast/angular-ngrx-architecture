import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Store} from '@ngrx/store';

import {IRootStore} from '../../../root/reducers/root.store.interface';
import {privateParams} from '../../../../../privateparams';
import {ApiCommonService} from '../../../common/services/api.common.service';
import {ActivatedRouteRootState} from '../../../root/reducers/activatedRoute.root.reducer';


@Injectable()
export class ApiJobPeopleService extends ApiCommonService {

  private storeSubscription: any;
  private paramsSubscription: any;

  constructor(public http: Http,
              public router: Router,
              public store: Store<IRootStore>) {
    super(http);

    // Logic required for api sublevel routes/directory:
    // Service can't access the activatedRoute object so we have to use some tricks here to get the route params
    // We use the ActivatedRouteCommonDirective to hydrate the activatedRoute store with the current route data
    // Then we listen to the store and extract the route params we need
    this.storeSubscription = this.store.select('activatedRoute').subscribe((activatedRouteRootState: ActivatedRouteRootState) => {
      const route = activatedRouteRootState.activatedRoute;
      if (route.params) {
        this.paramsSubscription = route.params.subscribe((params: Params) => {
          this.params = {
            apiUrl: `${privateParams.links.origamiPeoples}/${params['people_id']}/jobs`,
            embeddedListKey: 'jobs',
            formItemKey: 'job',
          };
        });
      }
    });

  }

  setParams() {

    this.params = {
      apiUrl: 'none',
      embeddedListKey: 'jobs',
      formItemKey: 'job',
    };

  }

}
