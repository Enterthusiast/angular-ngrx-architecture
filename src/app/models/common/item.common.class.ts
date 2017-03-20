import * as _ from 'lodash';
import {ModelCommonConfig} from '../../services/common/model/config/model.common.config';


export class ItemCommonClass {

  private idKey = ModelCommonConfig.DEFAULT_ID_KEY;

  constructor(params) {
    _.assign(
      {
        [ModelCommonConfig.ATTRIBUTES]: {},
        [ModelCommonConfig.DECORATORS]: {}
      },
      params);
    _.assign(
      this,
      {
        [ModelCommonConfig.ATTRIBUTES]: params[ModelCommonConfig.ATTRIBUTES],
        [ModelCommonConfig.DECORATORS]: params[ModelCommonConfig.DECORATORS]
      });
  }

  get(key): any {
    if (this[ModelCommonConfig.ATTRIBUTES]
      && this[ModelCommonConfig.ATTRIBUTES][key] ) {
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

  getDecorators(): any {
    if (this[ModelCommonConfig.DECORATORS]) {
      return this[ModelCommonConfig.DECORATORS];
    } else {
      return undefined;
    }
  }

}