import {Component, HostBinding, Input} from '@angular/core';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {ItemFormPutPeopleComponent} from '../../form/item/item.form.put.people.component';


@Component({
  selector: 'ori-display-people-item',
  template: `    
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <div>{{ peopleItem?.attributes?.lastname }}</div>
  `,
  styles: []
})
export class ItemDisplayPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;

  constructor() {}

}
