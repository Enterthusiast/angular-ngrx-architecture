import {Injectable} from '@angular/core';

import * as _ from 'lodash';

import {GetItemPeopleFields} from './fields/get.item.people.fields';
import {PostItemPeopleFields} from './fields/post.item.people.fields';
import {PutItemPeopleFields} from './fields/put.item.people.fields';
import {ModelCommonService} from '../../common/services/model.common.service';


@Injectable()
export class TransformerPeopleService {

  constructor(private modelCommonService: ModelCommonService) {}

  public toGetAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createGetModel(dataObject, GetItemPeopleFields));
  }

  public toPostAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPostModel(dataObject, PostItemPeopleFields));
  }

  public toPutAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPutModel(dataObject, PutItemPeopleFields));
  }

}
