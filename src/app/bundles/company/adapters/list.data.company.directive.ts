import {Directive, EventEmitter, OnDestroy, Output} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {CompanyState} from '../reducers/company.reducer';
import {ItemCompanyClass} from '../models/item.company.class';
import {DecoratorCompanyService} from '../services/decorator.company.service';
import {ManagerCompanyService} from '../services/manager.company.service';
import {SubjectCompanyService} from '../services/subject.company.service';

@Directive({
  selector: '[ori-list-data-company]'
})
export class ListDataCompanyDirective implements OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemCompanyClass[]> = new EventEmitter();
  private companyState$: Observable<CompanyState>;
  private companyListSubscription: any;

  constructor (private subjectCompanyService: SubjectCompanyService,
               private managerCompanyService: ManagerCompanyService) {

    this.companyState$ = subjectCompanyService.companyState$;
    this.companyListSubscription = this.companyState$.subscribe((value) => {
      const list: ItemCompanyClass[] = value.list;
      this.dataEmitter.emit([...list]);
    });

    this.getCompanyList();

  }

  private getCompanyList() {
    this.managerCompanyService.getList();
  }

  ngOnDestroy() {
    this.companyListSubscription.unsubscribe();
  }

}
