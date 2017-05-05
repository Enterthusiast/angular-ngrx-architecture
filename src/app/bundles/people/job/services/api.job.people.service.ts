import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Store} from '@ngrx/store';

import {IRootStore} from '../../../root/reducers/root.store.interface';
import {privateParams} from '../../../../../privateparams';
import {ApiCommonService} from '../../../common/services/api.common.service';


@Injectable()
export class ApiJobPeopleService extends ApiCommonService {

  constructor(public http: Http,
              public router: Router,
              public store: Store<IRootStore>) {
    super(http, router, store);
    this.setParamsSubscription({
      apiUrl: params => {
        debugger;
        return `${privateParams.links.origamiPeoples}/${params['people_id']}/jobs`;
      },
      embeddedListKey: 'jobs',
      formItemKey: 'job',
    });
  }

}
