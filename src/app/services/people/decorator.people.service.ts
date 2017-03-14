import {Injectable} from '@angular/core';

import {ItemPeopleGetFields} from './config/item.people.get.fields';
import {ItemPeoplePostFields} from './config/item.people.post.fields';
import {ItemPeoplePutFields} from './config/item.people.put.fields';
import * as _ from 'lodash';
import {ModelCommonService} from '../common/model/model.common.service';
import {ModelCommonConfig} from "../common/model/config/model.common.config";


@Injectable()
export class DecoratorPeopleService {

  constructor(private modelCommonService: ModelCommonService) {}

  public addRouterLink(model): void {
    return _.assign(model, {
      [ModelCommonConfig.DECORATORS]: {
        routerLink: this.modelCommonService.createRouterLink(model)
      }
    });
  }

}
