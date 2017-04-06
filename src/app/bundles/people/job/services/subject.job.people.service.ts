import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {IRootStore} from '../../../root/reducers/root.store.interface';
import {SubjectCommonService} from '../../../common/services/subject.common.service';
import {ManagerJobPeopleService} from './manager.job.people.service';


@Injectable()
export class SubjectJobPeopleService extends SubjectCommonService {

  constructor (public store: Store<IRootStore>,
               public managerService: ManagerJobPeopleService) {
    super(store, managerService);
  }

  setParams() {
    this.params = {
      storeKey: 'jobPeople'
    };
  }

}

