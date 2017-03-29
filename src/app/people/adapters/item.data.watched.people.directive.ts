import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ItemPeopleClass} from '../models/item.people.class';
import {SubjectPeopleService} from '../services/subject.people.service';
import {ManagerPeopleService} from '../services/manager.people.service';


@Directive({
  selector: '[ori-data-people-watched-item]'
})
export class ItemDataWatchedPeopleDirective implements OnInit, OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemPeopleClass> = new EventEmitter();
  private watchedPeopleItemSubscription: any;
  private routeParamsSubscribption: any;

  constructor (private managerPeopleService: ManagerPeopleService,
               private subjectPeopleService: SubjectPeopleService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.watchedPeopleItemSubscription = this.subjectPeopleService.watchedPeopleItem$.subscribe(peopleItem => {
      this.dataEmitter.emit(peopleItem);
    });
    this.routeParamsSubscribption = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.managerPeopleService.updateWatchedId(params['id']);
      } else {
        this.managerPeopleService.updateWatchedId('');
      }
    });
  }

  ngOnDestroy() {
    this.watchedPeopleItemSubscription.unsubscribe();
    this.routeParamsSubscribption.unsubscribe();
  }

}
