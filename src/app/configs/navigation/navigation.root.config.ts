import {segmentConfig} from '../routes/segment.config';

export const NavigationRootConfig = [
  {
    displayName: 'Playground',
    icon: 'pencil-square-o',
    id: 1,
    children: [
      {
        routerId: segmentConfig.item
      }
    ]
  },
  {
    displayName: 'Contacts',
    iconNav: 'briefcase',
    id: 2,
    children: [
      {
        routerId: segmentConfig.peopleList
      },
      {
        routerId: segmentConfig.peopleItemAdd
      }
    ]
  }
];
