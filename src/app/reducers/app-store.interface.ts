import {PeopleState} from './people/list.people.reducer';

export interface IAppStore {
  title: string;
  peopleList: PeopleState;
}
