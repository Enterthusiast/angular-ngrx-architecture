import {Injectable} from '@angular/core';

import * as _ from 'lodash';


@Injectable()
export class ItemCommonService {

  public createGetItem(model, postFields): any {
    return _.chain(model)
      .pick(postFields)
      .value();
  }

  public createPostIem(model, postFields): any {
    return _.chain(model)
      .pick(postFields)
      .mapKeys((value, key) => _.camelCase(key))
      .value();
  }

  public createPutItem(model, putFields): any {
    return _.chain(model)
      .pick(putFields)
      .mapKeys((value, key) => _.camelCase(key))
      .value();
  }

}
