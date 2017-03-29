import {Injectable} from '@angular/core';

import * as _ from 'lodash';

import {ItemPeopleGetFields} from './fields/item.people.get.fields';
import {ItemPeoplePostFields} from './fields/item.people.post.fields';
import {ItemPeoplePutFields} from './fields/item.people.put.fields';
import {ModelCommonService} from '../../common/services/model.common.service';


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
