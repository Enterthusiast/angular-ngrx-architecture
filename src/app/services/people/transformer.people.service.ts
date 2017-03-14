import {Injectable} from '@angular/core';

import {ItemPeopleGetFields} from './config/item.people.get.fields';
import {ItemPeoplePostFields} from './config/item.people.post.fields';
import {ItemPeoplePutFields} from './config/item.people.put.fields';
import * as _ from 'lodash';
import {ModelCommonService} from '../common/model/model.common.service';

@Injectable()
export class TransformerPeopleService {

  constructor(private modelCommonService: ModelCommonService) {}

  public toGetAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createGetModel(dataObject, ItemPeopleGetFields));
  }

  public toPostAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPostModel(dataObject, ItemPeoplePostFields));
  }

  public toPutAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPutModel(dataObject, ItemPeoplePutFields));
  }

}
