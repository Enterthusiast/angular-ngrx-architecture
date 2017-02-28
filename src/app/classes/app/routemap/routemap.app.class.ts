import { ObjectTool } from '../../tool/object/object.tool.classe';

import { routemapLinks } from '../../../routers/config/routemap-links.const';
import { routemapNestings } from '../../../routers/config/routemap-nestings.const';
import { routemapNames } from '../../../routers/config/routemap-names.const';
import { RouteAppFactory } from '../route/route.app.factory';

export class RouteMap {

  private static _routes;

  public static get routes() {

    if(this._routes) {
      return this._routes;
    } else {

      const joinChar = '/';
      const routesLinks = Object.assign({}, routemapLinks);
      const routesNestings = Object.assign({}, routemapNestings);
      const routesNames = Object.assign({}, routemapNames);
      let routesLinksArray = [];
      let routesNestedArray = [];
      let routesNamesArray = [];
      let routes;

      ObjectTool.forKeysInObject(routesLinks, (link, key) => {
        if(typeof link === 'object'
          && link.self) {
          routesLinksArray.push({ key: key, link: link.self })
        } else if(key !== 'self'){
          routesLinksArray.push({ key: key, link: link })
        }
      });

      ObjectTool.forKeysInObject(routesNestings, (link, key) => {
        if(typeof link === 'object'
          && link.self) {
          routesNestedArray.push({ key: key, link: link.self })
        } else if(key !== 'self'){
          routesNestedArray.push({ key: key, link: link })
        }
      });

      routesNestedArray = routesLinksArray.map(linkObject => {
        const filteredByKey = routesNestedArray.filter(nestedObject => nestedObject.key === linkObject.key);
        let nestingsList = [];
        let link = '';
        if(filteredByKey.length > 0) {
          nestingsList = filteredByKey[0].link;
          link = nestingsList.reduce((nestedLink, nestNodeName) => nestedLink + nestNodeName + joinChar, '');
          link += linkObject.link;
        } else {
          link = linkObject.link;
        }
        return {
          key: linkObject.key
          , link: link
        }
      });

      ObjectTool.forKeysInObject(routesNames, (name, key) => {
        if(typeof name === 'object'
          && name.self) {
          routesNamesArray.push({ key: key, name: name.self })
        } else if(key !== 'self'){
          routesNamesArray.push({ key: key, name: name })
        }
      });

      routes = routesNestedArray.map(linkObject => {
        const filteredByKey = routesNamesArray.filter(nameObject => nameObject.key === linkObject.key);
        let name = '';
        if(filteredByKey.length > 0) {
          name = filteredByKey[0].name;
        }
        return {
          name: name
          , link: linkObject.link
        }
      });

      routes.map(route => RouteAppFactory.createRoute(route));

      return this._routes = routes;
    }

  }

}
