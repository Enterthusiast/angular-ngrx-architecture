import {Component, HostBinding, Input} from '@angular/core';

import {ItemJobPeopleClass} from '../models/item.job.people.class';


@Component({
  selector: 'ori-item-job-people',
  template: `    
    <div ori-activatedroute-data-common ori-watched-item-data-job-people (dataEmitter)="jobPeopleItem=$event"></div>
    <div>{{ jobPeopleItem?.attributes?.title }}</div>
    <div>{{ jobPeopleItem?.attributes?.summary }}</div>
  `,
  styles: []
})
export class ItemJobPeopleComponent {
  jobPeopleItem: ItemJobPeopleClass;
}
