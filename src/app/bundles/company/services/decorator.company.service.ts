import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {ItemCompanyClass} from '../models/item.company.class';
import {ItemCommonService} from '../../common/services/item.common.service';


@Injectable()
export class DecoratorCompanyService {

  constructor(private modelCommonService: ItemCommonService) {}

}
