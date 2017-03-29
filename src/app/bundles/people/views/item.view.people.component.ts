import {Component, HostBinding, Input} from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {WatchedItemDataPeopleDirective} from '../adapters/watched.item.data.people.directive';


@Component({
  selector: 'ori-item-view-people',
  template: `
    <div ori-watched-item-data-people (dataEmitter)="peopleItem=$event"></div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <div>{{ peopleItem?.attributes?.lastname }}</div>
  `,
  styles: []
})
export class ItemViewPeopleComponent {
  peopleItem: ItemPeopleClass;
}
