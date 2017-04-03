import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {IRootStore} from '../../../root/reducers/root.store.interface';
import {SubjectCommonService} from '../../../common/services/subject.common.service';
import {ManagerPeopleService} from './manager.people.service';


@Injectable()
export class SubjectPeopleService extends SubjectCommonService {

  constructor (public store: Store<IRootStore>,
               public managerService: ManagerPeopleService) {
    super(store, managerService);
  }

  setParams() {
    this.params = {
      storeKey: 'people'
    };
  }

}

