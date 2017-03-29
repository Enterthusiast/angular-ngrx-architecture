import {RouteAppFactory} from '../route/route.app.factory';
import {routeConfigList} from '../../routers/config/route-config-list.const';

export const RouteMapController = new function() {

  let _routeAppClassList = [];
  let _routeConfigList = [];
  const self = this;

  self.routeAppClassList = function() {
    if (_routeAppClassList && _routeAppClassList.length > 0) {
      return _routeAppClassList;
    } else {
      return _routeAppClassList = routeConfigList
        .map(self.RouteToRouteClass);
    }
  };

  self.getRouteAppClassListFrom = function(routeIDList) {
    return routeIDList
      .map(self.getRoute)
      .map(self.RouteToRouteClass);
  };

  self.getRouteAppClass = function(routeID) {
    return self.RouteToRouteClass(self.getRoute(routeID));
  };

  self.getRoute = function(routeID) {
    if (!_routeConfigList || _routeConfigList.length === 0) {
      _routeConfigList = routeConfigList.slice();
    }
    return _routeConfigList.find(routeData => routeData.routeID === routeID);
  };

  self.RouteToRouteClass = function(routeMap) {
    if (routeMap) {
      const joinChar = '/';
      return RouteAppFactory.createRoute({
        name: routeMap.displayName
        , link: [
          joinChar,
          ...routeMap.nesting
            .map(routeID => self.getLeafLink(routeID)),
          routeMap.leafLink
        ]
          .join(joinChar)
      });
    }
  };

  self.getLeafLink = function(routeID) {
    const route = self.getRoute(routeID);
    if (route && route.leafLink) {
      return route.leafLink;
    } else {
      console.error(`Origami-Hub: route note found with routeID: ${routeID}`);
    }
  };

};
