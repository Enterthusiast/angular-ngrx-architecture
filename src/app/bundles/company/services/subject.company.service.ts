import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {ItemCompanyClass} from '../models/item.company.class';
import {CompanyState} from '../reducers/company.reducer';
import {ManagerCompanyService} from './manager.company.service';

@Injectable()
export class SubjectCompanyService {

  companyState$: Observable<CompanyState>;
  watchedCompanyItem$: Subject<ItemCompanyClass> = new Subject();

  constructor (private store: Store<IRootStore>,
               private managerCompanyService: ManagerCompanyService) {
    this.companyState$ = this.store.select('company');
    this.createWatchedIdSubject();
  }

  private createWatchedIdSubject() {
    this.companyState$.subscribe(value => {
      let result;
      if (value.watchedId) {
        result = value.list.find(companyItem => {
          return companyItem.getId() === value.watchedId;
        });
        if (result) {
          this.watchedCompanyItem$.next(result);
        } else {
          this.managerCompanyService.getItem(value.watchedId);
        }
      }
    });
  }

}

