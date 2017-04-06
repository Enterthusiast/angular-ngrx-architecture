import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {TransformerJobPeopleService} from './transformer.job.people.service';
import {FactoryJobPeopleService} from './factory.job.people.service';
import {EffectJobPeopleService} from './effect.job.people.service';
import {ApiJobPeopleService} from './api.job.people.service';
import {ManagerCommonService} from '../../../common/services/manager.common.service';


@Injectable()
export class ManagerJobPeopleService extends ManagerCommonService {

  constructor(public apiService: ApiJobPeopleService,
              public transformerService: TransformerJobPeopleService,
              public factoryService: FactoryJobPeopleService,
              public effectService: EffectJobPeopleService) {
    super(apiService, transformerService, factoryService, effectService);
  }

}
