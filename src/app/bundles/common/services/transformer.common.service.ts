import {Injectable} from '@angular/core';

import * as _ from 'lodash';

import {ItemCommonService} from './item.common.service';
import {GetItemCommonFields} from './fields/get.item.common.fields';
import {PostItemCommonFields} from './fields/post.item.common.fields';
import {PutItemCommonFields} from './fields/put.item.common.fields';


@Injectable()
export class TransformerCommonService {

  protected params = {
    getItemFields: GetItemCommonFields,
    postItemFields: PostItemCommonFields,
    putItemFields: PutItemCommonFields
  };

  constructor(protected itemService: ItemCommonService) {
    this.setParams();
  }

  protected setParams() {}

  public toGetAttributes(dataObject): any {
    const dataFields = _.assign({}, dataObject, this.embeddedUuidFields(dataObject));
    return _.assign({}, this.itemService.createGetItem(dataFields, this.params.getItemFields));
  }

  public toPostAttributes(dataObject): any {
    return _.assign({}, this.itemService.createPostIem(dataObject, this.params.postItemFields));
  }

  public toPutAttributes(dataObject): any {
    return _.assign({}, this.itemService.createPutItem(dataObject, this.params.putItemFields));
  }

  private embeddedUuidFields(dataObject): any {
    const embeddedObject = dataObject._embedded;
    if (embeddedObject) {
      return _.keys(embeddedObject).reduce( (embeddedHash, key) => {
        const value = embeddedObject[key];
        if (value.uuid) {
          embeddedHash[`${key}_uuid`] = value.uuid;
        }
        return embeddedHash;
      }, {});
    }
  }

}
