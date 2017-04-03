import {Injectable} from '@angular/core';

import * as _ from 'lodash';

import {GetItemCompanyFields} from './fields/get.item.company.fields';
import {PostItemCompanyFields} from './fields/post.item.company.fields';
import {PutItemCompanyFields} from './fields/put.item.company.fields';
import {ItemCommonService} from '../../common/services/item.common.service';


@Injectable()
export class TransformerCompanyService {

  constructor(private modelCommonService: ItemCommonService) {}

  public toGetAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createGetItem(dataObject, GetItemCompanyFields));
  }

  public toPostAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPostIem(dataObject, PostItemCompanyFields));
  }

  public toPutAttributes(dataObject): any {
    return _.assign({}, this.modelCommonService.createPutItem(dataObject, PutItemCompanyFields));
  }

}
