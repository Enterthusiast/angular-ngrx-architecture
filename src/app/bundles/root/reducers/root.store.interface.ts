import {PeopleState} from '../../people/self/reducers/people.reducer';
import {JobPeopleState} from '../../people/job/reducers/job.people.reducer';

export interface IRootStore {
  title: string;
  people: PeopleState;
  jobPeople: JobPeopleState;
}
