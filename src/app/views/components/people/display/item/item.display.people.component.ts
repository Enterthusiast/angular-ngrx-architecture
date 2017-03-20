import {Component, Input} from '@angular/core';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {ItemFormPutPeopleComponent} from '../../form/item/item.form.put.people.component';


@Component({
  selector: 'ori-display-people-item',
  template: `
    <div>ItemDisplayPeopleComponent</div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
  `,
  styles: []
})
export class ItemDisplayPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;

  constructor() {}

}
