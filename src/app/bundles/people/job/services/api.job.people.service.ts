import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/toPromise';

import {privateParams} from '../../../../../privateparams';
import {ApiCommonService} from '../../../common/services/api.common.service';


@Injectable()
export class ApiJobPeopleService extends ApiCommonService {

  constructor(public http: Http,
              public route: ActivatedRoute) {
    super(http);

    this.route.params.subscribe((routeParams: Params) => {
      debugger
      this.params = {
        apiUrl: `${privateParams.links.origamiPeoples}/${routeParams['people_id']}/jobs`,
        embeddedListKey: 'jobs',
        formItemKey: 'job',
      };
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
