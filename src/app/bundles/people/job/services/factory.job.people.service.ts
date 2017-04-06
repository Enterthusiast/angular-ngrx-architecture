import {Injectable} from '@angular/core';

import {TransformerJobPeopleService} from './transformer.job.people.service';
import {ItemFactoryCommonService} from '../../../common/services/item.factory.common.service';

@Injectable()
export class FactoryJobPeopleService extends ItemFactoryCommonService {

  constructor(public transformerService: TransformerJobPeopleService) {
    super(transformerService);
  }

}
