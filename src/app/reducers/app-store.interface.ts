import {PeopleState} from '../people/reducers/list.people.reducer';

export interface IAppStore {
  title: string;
  peopleList: PeopleState;
}
