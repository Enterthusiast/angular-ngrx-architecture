import {Directive} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SubjectPeopleService} from '../services/subject.people.service';
import {ManagerPeopleService} from '../services/manager.people.service';
import {WatchedItemDataCommonDirective} from '../../../common/adapters/watched.item.data.people.directive';


@Directive({
  selector: '[ori-watched-item-data-people]'
})
export class WatchedItemDataPeopleDirective extends WatchedItemDataCommonDirective {

  constructor (public managerService: ManagerPeopleService,
               public subjectService: SubjectPeopleService,
               public route: ActivatedRoute) {
    super(managerService, subjectService, route);
  }

  setParams() {
    this.params = {
      watchedItemKey: 'watchedItem$',
      updateWatchedIdKey: 'updateWatchedId'
    };
  }

}
