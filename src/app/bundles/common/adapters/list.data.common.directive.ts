import {Directive, EventEmitter, Injector, OnDestroy, Output} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {ItemCommonClass} from '../models/item.common.class';
import {ManagerCommonService} from '../services/manager.common.service';
import {SubjectCommonService} from '../services/subject.common.service';


@Directive({
  selector: '[ori-list-data-common]'
})
export class ListDataCommonDirective implements OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemCommonClass[]> = new EventEmitter();

  private state$: Observable<ItemCommonClass>;
  private listSubscription: any;

  protected params = {
    listKey: 'list',
    stateKey: 'state$',
    getListKey: 'getList'
  };

  constructor (protected managerService: ManagerCommonService,
               protected subjectService: SubjectCommonService) {

    this.atConstructorStart();

    this.setParams();

    this.state$ = subjectService[this.params.stateKey];
    this.listSubscription = this.state$.subscribe((value) => {
      const list: ItemCommonClass[] = value[this.params.listKey].map(item => {
        return this.decorateItem(item);
      });
      this.dataEmitter.emit([...list]);
    });

    this.getList();

  }

  protected atConstructorStart() {}
  protected setParams() {}

  decorateItem(item) {
    return item;
  }

  getList() {
    this.managerService[this.params.getListKey]();
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

}
