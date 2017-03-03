import { routeConfigList } from '../../../routers/config/route-config-list.const';
import { RouteAppFactory } from '../route/route.app.factory';

export const RouteMapClass = new function() {

  let _routeAppClassList = [];
  let _routeConfigList = [];
  const self = this;

  self.routeAppClassList = function() {
    if(_routeAppClassList && _routeAppClassList.length > 0) {
      return _routeAppClassList;
    } else {
      return _routeAppClassList = routeConfigList
        .map(self.RouteToRouteClass)
        .map(route => RouteAppFactory.createRoute(route));
    }
  };

  self.RouteToRouteClass = function(routeMap) {
    const joinChar = '/';
    return {
      name: routeMap.displayName
      , link: [
        ...routeMap.nesting
          .map(routeID => self.getLeafLink(routeID))
        , routeMap.leafLink
      ]
        .join(joinChar)
    }
  };

  self.getRouteAppClassListFrom = function(routeIDList) {
    return routeIDList
      .map(self.getRoute)
      .map(self.RouteToRouteClass)
  };

  self.getRoute = function(routeID) {
    if(!_routeConfigList || _routeConfigList.length === 0) {
      _routeConfigList = routeConfigList.slice();
    }
    return _routeConfigList.find(routeData => routeData.routeID === routeID);
  };

  self.getLeafLink = function(routeID) {
    const route = self.getRoute(routeID);
    if (route && route.leafLink) {
      return route.leafLink;
    } else {
      console.error(`Origami-Hub: route note found with routeID: ${routeID}`);
    }
  };

}
