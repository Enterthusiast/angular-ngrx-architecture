import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {ItemPeopleClass} from '../models/item.people.class';
import {ItemCommonService} from '../../common/services/item.common.service';


@Injectable()
export class DecoratorPeopleService {

  constructor(private modelCommonService: ItemCommonService) {}

}
