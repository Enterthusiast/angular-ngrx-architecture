import {Injectable} from '@angular/core';

import {ItemCommonService} from './item.common.service';


@Injectable()
export class DecoratorCommonService {

  constructor(protected itemCommonService: ItemCommonService) {}

}
