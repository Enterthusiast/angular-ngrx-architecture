import {Injectable} from '@angular/core';
import * as _ from 'lodash';

import {ModelCommonService} from '../../services/common/model/model.common.service';
import {ItemPeopleClass} from '../models/item.people.class';


@Injectable()
export class DecoratorPeopleService {

  constructor(private modelCommonService: ModelCommonService) {}

  public addRouterLinks(model: ItemPeopleClass): ItemPeopleClass {
    const routerLinks = this.modelCommonService.createRouterLinks(model.itemRouteId, model.getId());
    return _.assignIn({}, model.setDecorator('routerLinks', routerLinks));
  }

}
