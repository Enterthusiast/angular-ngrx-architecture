import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ItemCompanyClass} from '../models/item.company.class';
import {SubjectCompanyService} from '../services/subject.company.service';
import {ManagerCompanyService} from '../services/manager.company.service';


@Directive({
  selector: '[ori-watched-item-data-company]'
})
export class WatchedItemDataCompanyDirective implements OnInit, OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemCompanyClass> = new EventEmitter();
  private watchedCompanyItemSubscription: any;
  private routeParamsSubscription: any;

  constructor (private managerCompanyService: ManagerCompanyService,
               private subjectCompanyService: SubjectCompanyService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.watchedCompanyItemSubscription = this.subjectCompanyService.watchedCompanyItem$.subscribe(companyItem => {
      this.dataEmitter.emit(companyItem);
    });
    this.routeParamsSubscription = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.managerCompanyService.updateWatchedId(params['id']);
      } else {
        this.managerCompanyService.updateWatchedId('');
      }
    });
  }

  ngOnDestroy() {
    this.watchedCompanyItemSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }

}
