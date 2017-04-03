import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {ManagerCommonService} from './manager.common.service';


@Injectable()
export class SubjectCommonService {

  state$: Observable<any>;
  watchedItem$: Subject<any> = new Subject();

  protected params = {
    storeKey: ''
  };

  constructor (protected store: Store<IRootStore>,
               protected managerService: ManagerCommonService) {
    this.setParams();
    this.state$ = this.store.select(this.params.storeKey);
    this.createWatchedIdSubject();
  }

  protected setParams() {}

  private createWatchedIdSubject() {
    this.state$.subscribe(value => {
      let result;
      if (value.watchedId !== '') {
        result = value.list.find(listItem => {
          return listItem.getId() === value.watchedId;
        });
        if (result) {
          this.watchedItem$.next(result);
        } else {
          this.managerService.getItem(value.watchedId);
        }
      } else {
        this.watchedItem$.next('');
      }
    });
  }

}

