import {PeopleState} from '../../people/reducers/people.reducer';

export interface IRootStore {
  title: string;
  people: PeopleState;
}
