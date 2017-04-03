import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {TransformerPeopleService} from './transformer.people.service';
import {FactoryPeopleService} from './factory.people.service';
import {EffectPeopleService} from './effect.people.service';
import {ApiPeopleService} from './api.people.service';
import {ManagerCommonService} from '../../../common/services/manager.common.service';


@Injectable()
export class ManagerPeopleService extends ManagerCommonService {

  constructor(public apiService: ApiPeopleService,
              public transformerService: TransformerPeopleService,
              public factoryService: FactoryPeopleService,
              public effectService: EffectPeopleService) {
    super(apiService, transformerService, factoryService, effectService);
  }

}
