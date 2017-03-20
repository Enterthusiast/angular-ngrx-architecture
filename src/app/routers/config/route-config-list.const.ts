import {routeIDList} from './routeId.const';

export const routeConfigList = [
  { routeID: routeIDList.test, leafLink: 'test', displayName: 'Test', nesting: [] }
    , { routeID: routeIDList.item, leafLink: 'item', displayName: 'Item', nesting: [routeIDList.test] }
    , { routeID: routeIDList.sub, leafLink: 'sub', displayName: 'Sub Item', nesting: [routeIDList.test] }
  , { routeID: routeIDList.home, leafLink: 'home', displayName: 'Home', nesting: [] }
  , { routeID: routeIDList.people, leafLink: 'contact', displayName: 'Contacts', nesting: [] }
    , { routeID: routeIDList.peopleList, leafLink: 'list', displayName: 'Contacts', nesting: [routeIDList.people] }
    , { routeID: routeIDList.peopleItem, leafLink: 'item', displayName: 'Fiche Contact', nesting: [routeIDList.people] }
      , { routeID: routeIDList.peopleItemAdd, leafLink: 'add', displayName: 'Fiche Contact (Ajouter)', nesting: [routeIDList.people, routeIDList.peopleItem] }
      , { routeID: routeIDList.peopleItemEdit, leafLink: ':id/edit', displayName: 'Fiche Contact (Edition)', nesting: [routeIDList.people, routeIDList.peopleItem] }
      , { routeID: routeIDList.peopleItemShow, leafLink: ':id', displayName: 'Fiche Contact (Afficher)', nesting: [routeIDList.people, routeIDList.peopleItem] }
];
