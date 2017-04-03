import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {privateParams} from '../../../../../privateparams';
import {ApiCommonService} from '../../../common/services/api.common.service';


@Injectable()
export class ApiPeopleService extends ApiCommonService {

  constructor(public http: Http) {
    super(http);
  }

  setParams() {
    this.params = {
      apiUrl: privateParams.links.origamiPeoples,
      embeddedListKey: 'peoples',
      formItemKey: 'people',
    };
  }

}
