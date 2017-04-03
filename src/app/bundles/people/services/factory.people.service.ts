import {Injectable} from '@angular/core';

import {TransformerPeopleService} from './transformer.people.service';
import {ItemFactoryCommonService} from '../../common/services/item.factory.common.service';

@Injectable()
export class FactoryPeopleService extends ItemFactoryCommonService {

  constructor(public transformerService: TransformerPeopleService) {
    super(transformerService);
  }

}
