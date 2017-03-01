import { routemap } from '../../../routers/config/routemap.const';
import { RouteAppFactory } from '../route/route.app.factory';
import { RouteAppClass } from "../route/route.app.class";

export class RouteMapClass {

  private static _routeAppClassList: RouteAppClass[];
  private static _routemap;

  public static get routeAppClassList() {
    if(RouteMapClass._routeAppClassList) {
      return RouteMapClass._routeAppClassList;
    } else {
      return RouteMapClass._routeAppClassList = routemap
        .map(RouteMapClass.RouteToRouteClass)
        .map(route => RouteAppFactory.createRoute(route));
    }
  }

  private static RouteToRouteClass(routeMap) {
    const joinChar = '/';
    return {
      name: routeMap.displayName
      , link: [
        ...routeMap.nesting
          .map(routeID => RouteMapClass.getLeafLink(routeID))
        , routeMap.leafLink
      ]
        .join(joinChar)
    }
  }

  public static getRouteAppClassListFrom(routeIDList) {
    return routeIDList
      .map(RouteMapClass.getRoute)
      .map(RouteMapClass.RouteToRouteClass)
  }

  public static getRoute(routeID) {
    if(!RouteMapClass._routemap) {
      RouteMapClass._routemap = routemap.slice();
    }
    return RouteMapClass._routemap.find(routeData => routeData.routeID === routeID);
  }

  public static getLeafLink(routeID) {
    const route = RouteMapClass.getRoute(routeID);
    return route.leafLink;
  }

}
