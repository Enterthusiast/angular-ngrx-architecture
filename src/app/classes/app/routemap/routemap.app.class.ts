import { routeConfigList } from '../../../routers/config/route-config-list.const';
import { RouteAppFactory } from '../route/route.app.factory';
import { RouteAppClass } from "../route/route.app.class";

export const RouteMapClass = {

  _routeAppClassList: []
  , _routeConfigList: []

  , routeAppClassList() {
    if(RouteMapClass._routeAppClassList && RouteMapClass._routeAppClassList.length > 0) {
      return RouteMapClass._routeAppClassList;
    } else {
      return RouteMapClass._routeAppClassList = routeConfigList
        .map(RouteMapClass.RouteToRouteClass)
        .map(route => RouteAppFactory.createRoute(route));
    }
  }

  , RouteToRouteClass(routeMap) {
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

  , getRouteAppClassListFrom(routeIDList) {
    return routeIDList
      .map(RouteMapClass.getRoute)
      .map(RouteMapClass.RouteToRouteClass)
  }

  , getRoute(routeID) {
    if(!RouteMapClass._routeConfigList || RouteMapClass._routeConfigList.length === 0) {
      RouteMapClass._routeConfigList = routeConfigList.slice();
    }
    return RouteMapClass._routeConfigList.find(routeData => routeData.routeID === routeID);
  }

  , getLeafLink(routeID) {
    const route = RouteMapClass.getRoute(routeID);
    if (route && route.leafLink) {
      return route.leafLink;
    } else {
      console.error(`Origami-Hub: route note found with routeID: ${routeID}`);
    }
  }

};
