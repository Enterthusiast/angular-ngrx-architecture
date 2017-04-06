import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {ItemJobPeopleClass} from '../models/item.job.people.class';
import {ItemCommonService} from '../../../common/services/item.common.service';


@Injectable()
export class DecoratorJobPeopleService {

  constructor(private modelCommonService: ItemCommonService) {}

}
