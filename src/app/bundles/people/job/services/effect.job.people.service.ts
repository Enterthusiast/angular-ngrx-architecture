import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {IRootStore} from '../../../root/reducers/root.store.interface';

import {jobPeopleReducerSetList, jobPeopleReducerSetWatchedId} from '../reducers/job.people.reducer';

import {EffectCommonService} from '../../../common/services/effect.common.service';


@Injectable()
export class EffectJobPeopleService extends EffectCommonService {

  constructor (public store: Store<IRootStore>) {
    super(store);
  }

  setParams() {
    this.params = {
      storeKey: 'jobPeople',
      reducerFunctions: {
        setList: jobPeopleReducerSetList,
        setWatchedId: jobPeopleReducerSetWatchedId,
      }
    };
  }

}

