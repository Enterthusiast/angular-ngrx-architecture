import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ItemCommonClass} from '../models/item.common.class';
import {ManagerCommonService} from '../services/manager.common.service';
import {SubjectCommonService} from '../services/subject.common.service';


@Directive({
  selector: '[ori-watched-item-data-common]'
})
export class WatchedItemDataCommonDirective implements OnInit, OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemCommonClass> = new EventEmitter();

  private watchedItemSubscription: any;
  private routeParamsSubscription: any;

  protected params = {
    watchedItemKey: 'watchedItem$',
    updateWatchedIdKey: 'updateWatchedId'
  };

  constructor (protected managerCommonService: ManagerCommonService,
               protected subjectCommonService: SubjectCommonService,
               protected route: ActivatedRoute) {
    this.setParams();
  }

  protected setParams() {};

  ngOnInit(): void {
    this.watchedItemSubscription = this.subjectCommonService[this.params.watchedItemKey].subscribe(item => {
      this.dataEmitter.emit(item);
    });
    this.routeParamsSubscription = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.managerCommonService[this.params.updateWatchedIdKey](params['id']);
      } else {
        this.managerCommonService[this.params.updateWatchedIdKey]('');
      }
    });
  }

  ngOnDestroy() {
    this.watchedItemSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }

}
