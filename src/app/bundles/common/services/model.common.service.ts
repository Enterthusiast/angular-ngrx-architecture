import {Injectable} from '@angular/core';

import * as _ from 'lodash';

import {RouteMapController} from '../../../transverses/routes/route-map.app.controller';


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

  public createRouterLinks(itemRouteId, id): any {
    let itemRoute = RouteMapController.getRouteAppClass(itemRouteId).link;
    itemRoute = itemRoute.replace(':id', id);
    return {
      show: itemRoute,
      edit: itemRoute + '/edit'
    };
  }

}
