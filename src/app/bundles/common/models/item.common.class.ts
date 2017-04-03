import * as _ from 'lodash';

import {ItemCommonConfig} from '../../../configs/models/item.common.config';


export class ItemCommonClass {

  private idKey = ItemCommonConfig.DEFAULT_ID_KEY;

  constructor(params) {
    _.assignIn(
      this,
      {
        [ItemCommonConfig.ATTRIBUTES]: {},
        [ItemCommonConfig.DECORATORS]: {}
      },
      params);
    _.assignIn(
      this,
      {
        [ItemCommonConfig.ATTRIBUTES]: params[ItemCommonConfig.ATTRIBUTES] || {},
        [ItemCommonConfig.DECORATORS]: params[ItemCommonConfig.DECORATORS] || {}
      });
  }

  get(key): any {
    if (this[ItemCommonConfig.ATTRIBUTES]
      && this[ItemCommonConfig.ATTRIBUTES][key]) {
      return this[ItemCommonConfig.ATTRIBUTES][key];
    } else {
      return undefined;
    }
  }

  getId(): any {
    return this.get(this.idKey);
  }

  getAttributes(): any {
    if (this[ItemCommonConfig.ATTRIBUTES]) {
      return this[ItemCommonConfig.ATTRIBUTES];
    } else {
      return undefined;
    }
  }

  setDecorator(key: string, data: any): ItemCommonClass {
    const item = _.assignIn({}, this);
    if (item[ItemCommonConfig.DECORATORS] && key) {
      item[ItemCommonConfig.DECORATORS] = _.assignIn({}, item[ItemCommonConfig.DECORATORS]);
      item[ItemCommonConfig.DECORATORS][key] = data;
    }
    return item;
  }

  getDecorator(key): any {
    if (this[ItemCommonConfig.DECORATORS]
      && this[ItemCommonConfig.DECORATORS][key]) {
      return this[ItemCommonConfig.DECORATORS][key];
    } else {
      return undefined;
    }
  }

  getDecorators(): any {
    if (this[ItemCommonConfig.DECORATORS]) {
      return this[ItemCommonConfig.DECORATORS];
    } else {
      return undefined;
    }
  }

}
