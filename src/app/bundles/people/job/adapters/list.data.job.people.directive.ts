import {Directive} from '@angular/core';

import {ManagerJobPeopleService} from '../services/manager.job.people.service';
import {SubjectJobPeopleService} from '../services/subject.job.people.service';
import {ListDataCommonDirective} from '../../../common/adapters/list.data.people.directive';


@Directive({
  selector: '[ori-list-data-job-people]',
})
export class ListDataJobPeopleDirective extends ListDataCommonDirective {

  constructor(public managerService: ManagerJobPeopleService,
              public subjectService: SubjectJobPeopleService) {
    super(managerService, subjectService);
  }

  setParams() {
    this.params = {
      listKey: 'list',
      stateKey: 'state$',
      getListKey: 'getList'
    };
  }

}
