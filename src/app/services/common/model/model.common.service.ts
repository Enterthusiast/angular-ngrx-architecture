import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {ModelCommonConfig} from './config/model.common.config';

@Injectable()
export class ModelCommonService {

  public createGetModel(model, postFields): any {
    return _.chain(model)
      .pick(postFields)
      .value();
  }

  public createPostModel(model, postFields): any {
    return _.chain(model)
      .pick(postFields)
      .mapKeys((value, key) => _.camelCase(key))
      .value();
  }

  public createPutModel(model, putFields): any {
    return _.chain(model)
      .pick(putFields)
      .mapKeys((value, key) => _.camelCase(key))
      .value();
  }

  public createRouterLink(attributes, uuidKey = ModelCommonConfig.DEFAULT_ID_KEY, prefix = '', suffix = ''): string {
    return `${prefix}${attributes[uuidKey]}${suffix}`;
  }

}
