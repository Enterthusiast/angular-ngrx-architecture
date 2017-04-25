import {Directive} from '@angular/core';

import {ManagerPeopleService} from '../services/manager.people.service';
import {SubjectPeopleService} from '../services/subject.people.service';
import {ListDataCommonDirective} from '../../../common/adapters/list.data.common.directive';


@Directive({
  selector: '[ori-list-data-people]',
})
export class ListDataPeopleDirective extends ListDataCommonDirective {

  constructor(public managerService: ManagerPeopleService,
              public subjectService: SubjectPeopleService) {
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
