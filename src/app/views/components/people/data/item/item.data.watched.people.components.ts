import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../../../reducers/app-store.interface';
import * as _ from 'lodash';
import {FactoryPeopleService} from '../../../../../services/people/factory.people.service';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {ActivatedRoute, Params} from '@angular/router';
import {ItemDataPeopleComponent} from './item.data.people.component';
import {peopleSetWatchedId, PeopleState} from "../../../../../reducers/people/list.people.reducer";
import {SubjectPeopleService} from "../../../../../services/people/subject.people.service";

@Component({
  selector: 'ori-data-people-watched-item',
  template: `    
    <ori-form-watched-people-item [peopleItem]="peopleItem"></ori-form-watched-people-item>
  `,
  styles: []
})
export class ItemDataWatchedPeopleComponent implements OnInit {

  peopleItem: ItemPeopleClass = new ItemPeopleClass({});

  constructor (private store: Store<IAppStore>,
               private subjectPeopleService: SubjectPeopleService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectPeopleService.watchedPeopleItem$.subscribe(peopleItem => {
      this.peopleItem = peopleItem
    });
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.store.dispatch(peopleSetWatchedId(params['id']));
      } else {
        this.store.dispatch(peopleSetWatchedId(''));
      }
    });
  }

}
