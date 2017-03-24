import {PeopleState} from "./people/list.people.reducer";
import {Observable} from "rxjs/Observable";

export interface IAppStore {
  title: string;
  peopleList: PeopleState;
}
