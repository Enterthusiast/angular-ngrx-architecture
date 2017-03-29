import {PeopleState} from '../../people/reducers/people.reducer';

export interface IAppStore {
  title: string;
  peopleList: PeopleState;
}
