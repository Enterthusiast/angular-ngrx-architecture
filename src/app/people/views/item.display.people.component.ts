import {Component, HostBinding, Input} from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {ItemDataWatchedPeopleDirective} from '../adapters/item.data.watched.people.directive';


@Component({
  selector: 'ori-display-people-item',
  template: `
    <div ori-data-people-watched-item (dataEmitter)="peopleItem=$event"></div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <div>{{ peopleItem?.attributes?.lastname }}</div>
  `,
  styles: []
})
export class ItemDisplayPeopleComponent {
  peopleItem: ItemPeopleClass;
}
