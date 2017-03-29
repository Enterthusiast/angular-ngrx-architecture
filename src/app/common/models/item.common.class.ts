import * as _ from 'lodash';
import {ModelCommonConfig} from '../services/config/model.common.config';


export class ItemCommonClass {

  private idKey = ModelCommonConfig.DEFAULT_ID_KEY;
  private _itemRouteId: string;
  private _listRouteId: string;

  constructor(params) {
    _.assignIn(
      this,
      {
        [ModelCommonConfig.ATTRIBUTES]: {},
        [ModelCommonConfig.DECORATORS]: {}
      },
      params);
    _.assignIn(
      this,
      {
        [ModelCommonConfig.ATTRIBUTES]: params[ModelCommonConfig.ATTRIBUTES] || {},
        [ModelCommonConfig.DECORATORS]: params[ModelCommonConfig.DECORATORS] || {}
      });
  }

  get itemRouteId(): string {
    return this._itemRouteId;
  }

  set itemRouteId(value: string) {
    this._itemRouteId = value;
  }

  get listRouteId(): string {
    return this._listRouteId;
  }

  set listRouteId(value: string) {
    this._listRouteId = value;
  }

  get(key): any {
    if (this[ModelCommonConfig.ATTRIBUTES]
      && this[ModelCommonConfig.ATTRIBUTES][key]) {
      return this[ModelCommonConfig.ATTRIBUTES][key];
    } else {
      return undefined;
    }
  }

  getId(): any {
    return this.get(this.idKey);
  }

  getAttributes(): any {
    if (this[ModelCommonConfig.ATTRIBUTES]) {
      return this[ModelCommonConfig.ATTRIBUTES];
    } else {
      return undefined;
    }
  }

  setDecorator(key: string, data: any): ItemCommonClass {
    const item = _.assignIn({}, this);
    if (item[ModelCommonConfig.DECORATORS] && key) {
      item[ModelCommonConfig.DECORATORS] = _.assignIn({}, item[ModelCommonConfig.DECORATORS]);
      item[ModelCommonConfig.DECORATORS][key] = data;
    }
    return item;
  }

  getDecorator(key): any {
    if (this[ModelCommonConfig.DECORATORS]
      && this[ModelCommonConfig.DECORATORS][key]) {
      return this[ModelCommonConfig.DECORATORS][key];
    } else {
      return undefined;
    }
  }

  getDecorators(): any {
    if (this[ModelCommonConfig.DECORATORS]) {
      return this[ModelCommonConfig.DECORATORS];
    } else {
      return undefined;
    }
  }

}
