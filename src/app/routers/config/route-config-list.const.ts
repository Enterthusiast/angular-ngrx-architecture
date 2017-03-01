export const routeConfigList = [
  { routeID: 'test', leafLink: 'test', displayName: 'Test', nesting: [] }
    , { routeID: 'item', leafLink: 'item', displayName: 'Item', nesting: ['test'] }
    , { routeID: 'sub', leafLink: 'sub', displayName: 'Sub Item', nesting: ['test'] }
  , { routeID: 'home', leafLink: 'home', displayName: 'Home', nesting: [] }
  , { routeID: 'people', leafLink: 'contact', displayName: 'Contacts', nesting: [] }
    , { routeID: 'people-list', leafLink: 'list', displayName: 'Contacts', nesting: ['people'] }
    , { routeID: 'people-item', leafLink: 'item/:uuid', displayName: 'Fiche Contact', nesting: ['people'] }
];
