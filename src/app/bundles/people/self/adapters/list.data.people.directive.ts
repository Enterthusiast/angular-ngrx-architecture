import {Directive} from '@angular/core';

import {ManagerPeopleService} from '../services/manager.people.service';
import {SubjectPeopleService} from '../services/subject.people.service';
import {ListDataCommonDirective} from '../../../common/adapters/list.data.common.directive';
import {EmbeddedManagerCommonService} from '../../../common/services/embedded.manager.common.service';
import {privateParams} from "../../../../../privateparams";


@Directive({
  selector: '[ori-list-data-people]',
})
export class ListDataPeopleDirective extends ListDataCommonDirective {

  constructor(public managerService: EmbeddedManagerCommonService,
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

  atConstructorStart() {
    this.managerService.setApiService(
      this.managerService.getApiService().setParams({
        apiUrl: privateParams.links.origamiPeoples,
        embeddedListKey: 'peoples',
        formItemKey: 'people',
      })
    );
  }

}
