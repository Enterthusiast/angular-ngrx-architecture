import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {IRootStore} from '../../../root/reducers/root.store.interface';

import {peopleReducerSetList, peopleReducerSetWatchedId} from '../reducers/people.reducer';

import {EffectCommonService} from '../../../common/services/effect.common.service';


@Injectable()
export class EffectPeopleService extends EffectCommonService {

  constructor (public store: Store<IRootStore>) {
    super(store);
  }

  setParams() {
    this.params = {
      storeKey: 'people',
      reducerFunctions: {
        setList: peopleReducerSetList,
        setWatchedId: peopleReducerSetWatchedId,
      }
    };
  }

}

