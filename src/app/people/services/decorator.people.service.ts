import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {ItemPeopleClass} from '../models/item.people.class';
import {ModelCommonService} from '../../common/services/model.common.service';


@Injectable()
export class DecoratorPeopleService {

  constructor(private modelCommonService: ModelCommonService) {}

  public addRouterLinks(model: ItemPeopleClass): ItemPeopleClass {
    const routerLinks = this.modelCommonService.createRouterLinks(model.itemRouteId, model.getId());
    return _.assignIn({}, model.setDecorator('routerLinks', routerLinks));
  }

}
