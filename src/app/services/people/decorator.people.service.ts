import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {ModelCommonService} from '../common/model/model.common.service';
import {ModelCommonConfig} from '../common/model/config/model.common.config';

import {ItemPeopleClass} from '../../models/people/item.people.class';


@Injectable()
export class DecoratorPeopleService {

  constructor(private modelCommonService: ModelCommonService) {}

  public addRouterLinks(model: ItemPeopleClass): ItemPeopleClass {
    const routerLinks = this.modelCommonService.createRouterLinks(model.itemRouteId, model.getId());
    return _.assignIn({}, model.setDecorator('routerLinks', routerLinks));
  }

}
