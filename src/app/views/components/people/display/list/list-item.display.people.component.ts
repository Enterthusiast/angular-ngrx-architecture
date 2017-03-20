import {Component, Input} from '@angular/core';
import {RouteMapController} from "../../../../../controllers/app/route-map/route-map.app.controller";
import {ItemPeopleClass} from "../../../../../models/people/item.people.class";

@Component({
  selector: 'ori-display-people-list-item',
  template: `
    <dl>
      <dt>Firstname</dt>
      <dd>{{ peopleItem.get('firstname') }}</dd>
      <dt>Lastname</dt>
      <dd>{{ peopleItem.get('lastname') }}</dd>
    </dl>
    <a class="btn btn-link"
       routerLink="{{ displayData?.routerLinkShow }}"
       routerLinkActive="active" [hidden]="displayData?.routerLink">
      Afficher
    </a>
    <a class="btn btn-link"
       routerLink="{{ displayData?.routerLinkEdit }}"
       routerLinkActive="active" [hidden]="displayData?.routerLink">
      Editer
    </a>
    <br>
  `,
  styles: []
})
export class ListItemDisplayPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;
  @Input() displayData: any;

  constructor() { }

}
