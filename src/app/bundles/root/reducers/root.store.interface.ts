import {PeopleState} from '../../people/self/reducers/people.reducer';
import {JobPeopleState} from '../../people/job/reducers/job.people.reducer';
import {ActivatedRouteRootState} from './activatedRoute.root.reducer';

export interface IRootStore {
  activatedRoute: ActivatedRouteRootState;
  title: string;
  people: PeopleState;
  jobPeople: JobPeopleState;
}
