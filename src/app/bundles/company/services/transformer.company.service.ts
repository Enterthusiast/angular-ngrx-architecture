import {Injectable} from '@angular/core';

import * as _ from 'lodash';

import {GetItemCompanyFields} from './fields/get.item.company.fields';
import {PostItemCompanyFields} from './fields/post.item.company.fields';
import {PutItemCompanyFields} from './fields/put.item.company.fields';
import {ModelCommonService} from '../../common/services/model.common.service';


@Injectable()
export class TransformerCompanyService {

  constructor(private modelCommonService: ModelCommonService) {}

  public toGetAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createGetModel(dataObject, GetItemCompanyFields));
  }

  public toPostAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPostModel(dataObject, PostItemCompanyFields));
  }

  public toPutAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPutModel(dataObject, PutItemCompanyFields));
  }

}
