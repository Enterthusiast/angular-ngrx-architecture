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
    const dataFields = _.assign({}, dataObject, this.getEmbeddedUuidFields(dataObject));
    return _.assign({}, this.itemService.createGetItem(dataFields, this.params.getItemFields));
  }

  public toPostAttributes(dataObject): any {
    return _.assign({}, this.itemService.createPostIem(dataObject, this.params.postItemFields));
  }

  public toPutAttributes(dataObject): any {
    return _.assign({}, this.itemService.createPutItem(dataObject, this.params.putItemFields));
  }

  public getLinkHrefs(dataObject): any {
    const linksObject = dataObject._links;
    if (linksObject) {
      return _.keys(linksObject).reduce( (linksHash, key) => {
        const value = linksObject[key];
        if (value.href) {
          linksHash[key] = value.href;
        }
        return linksHash;
      }, {});
    }
  }

  public getEmbeddedUuids(dataObject): any {
    const embeddedObject = dataObject._embedded;
    if (embeddedObject) {
      return _.keys(embeddedObject).reduce( (embeddedHash, key) => {
        const value = embeddedObject[key];
        if (value.uuid) {
          embeddedHash[key] = value.uuid;
        }
        return embeddedHash;
      }, {});
    }
  }

  private getEmbeddedUuidFields(dataObject): any {
    const embeddedUuids = this.getEmbeddedUuids(dataObject);
    if (embeddedUuids) {
      return _.keys(embeddedUuids).map( (embeddedHash, key) => {
        const uuid = embeddedUuids[key];
        if (uuid) {
          embeddedHash[`${key}_uuid`] = uuid;
        }
        return embeddedHash;
      }, {});
    }
  }

}
