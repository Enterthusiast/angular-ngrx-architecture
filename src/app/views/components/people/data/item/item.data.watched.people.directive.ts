import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../../../reducers/app-store.interface';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {peopleSetWatchedId} from '../../../../../reducers/people/list.people.reducer';
import {SubjectPeopleService} from '../../../../../services/people/subject.people.service';

@Directive({
  selector: '[ori-data-people-watched-item]'
})
export class ItemDataWatchedPeopleDirective implements OnInit, OnDestroy {

  @Output() dataEmitter: EventEmitter<ItemPeopleClass> = new EventEmitter();
  private watchedPeopleItemSubscription: any;
  private routeParamsSubscribption: any;

  constructor (private store: Store<IAppStore>,
               private subjectPeopleService: SubjectPeopleService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.watchedPeopleItemSubscription = this.subjectPeopleService.watchedPeopleItem$.subscribe(peopleItem => {
      this.dataEmitter.emit(peopleItem);
    });
    this.routeParamsSubscribption = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.store.dispatch(peopleSetWatchedId(params['id']));
      } else {
        this.store.dispatch(peopleSetWatchedId(''));
      }
    });
  }

  ngOnDestroy() {
    this.watchedPeopleItemSubscription.unsubscribe();
    this.routeParamsSubscribption.unsubscribe();
  }

}
