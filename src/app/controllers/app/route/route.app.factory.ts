import { RouteAppClass } from '../../../models/app/route/route.app.class';

export class RouteAppFactory {

  public static createRoute(params): RouteAppClass {
    const name = params.name;
    const link = params.link;
    return new RouteAppClass(name, link);
  }

}
