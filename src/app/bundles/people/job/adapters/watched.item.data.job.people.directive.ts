import {Directive} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SubjectJobPeopleService} from '../services/subject.job.people.service';
import {ManagerJobPeopleService} from '../services/manager.job.people.service';
import {WatchedItemDataCommonDirective} from '../../../common/adapters/watched.item.data.people.directive';


@Directive({
  selector: '[ori-watched-item-data-job-people]'
})
export class WatchedItemDataJobPeopleDirective extends WatchedItemDataCommonDirective {

  constructor (public managerService: ManagerJobPeopleService,
               public subjectService: SubjectJobPeopleService,
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
