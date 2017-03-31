import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {ItemCompanyClass} from '../models/item.company.class';
import {ModelCommonService} from '../../common/services/model.common.service';


@Injectable()
export class DecoratorCompanyService {

  constructor(private modelCommonService: ModelCommonService) {}

}
