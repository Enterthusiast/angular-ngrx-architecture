import {segmentConfig} from './segment.config';

export const routeConfig = [
  { routeID: segmentConfig.test, leafLink: 'test', displayName: 'Test', nesting: [] },
    { routeID: segmentConfig.item, leafLink: 'item', displayName: 'Item', nesting: [segmentConfig.test] },
    { routeID: segmentConfig.sub, leafLink: 'sub', displayName: 'Sub Item', nesting: [segmentConfig.test] },
  { routeID: segmentConfig.home, leafLink: 'home', displayName: 'Home', nesting: [] },
  { routeID: segmentConfig.people, leafLink: 'contact', displayName: 'Contacts', nesting: [] },
    { routeID: segmentConfig.peopleList, leafLink: 'list', displayName: 'Contacts', nesting: [segmentConfig.people] },
    { routeID: segmentConfig.peopleItem, leafLink: 'item', displayName: 'Fiche Contact', nesting: [segmentConfig.people] },
    { routeID: segmentConfig.peopleItemAdd, leafLink: 'add', displayName: 'Fiche Contact (Ajouter)', nesting: [segmentConfig.people] },
    { routeID: segmentConfig.peopleItemEdit, leafLink: ':id/edit', displayName: 'Fiche Contact (Edition)', nesting: [segmentConfig.people] },
    { routeID: segmentConfig.peopleItemShow, leafLink: ':id', displayName: 'Fiche Contact (Afficher)', nesting: [segmentConfig.people] }
];
