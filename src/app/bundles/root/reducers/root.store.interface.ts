import {PeopleState} from '../../people/self/reducers/people.reducer';

export interface IRootStore {
  title: string;
  people: PeopleState;
}
