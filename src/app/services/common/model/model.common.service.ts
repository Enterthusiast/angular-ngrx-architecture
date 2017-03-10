import * as _ from "lodash";
import {Injectable} from "@angular/core";

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

  public createRouterLink(attributes, uuidKey = 'uuid', prefix = '', suffix = ''): string {
    return `${prefix}${attributes[uuidKey]}${suffix}`;
  }

}
