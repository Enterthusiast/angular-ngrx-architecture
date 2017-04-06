import {Component, HostBinding, Input} from '@angular/core';

import {ItemJobPeopleClass} from '../models/item.job.people.class';
import {WatchedItemDataJobPeopleDirective} from '../adapters/watched.item.data.job.people.directive';


@Component({
  selector: 'ori-item-job-people',
  template: `
    <div ori-watched-item-data-job-people (dataEmitter)="peopleItem=$event"></div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <div>{{ peopleItem?.attributes?.lastname }}</div>
  `,
  styles: []
})
export class ItemJobPeopleComponent {
  peopleItem: ItemJobPeopleClass;
}
