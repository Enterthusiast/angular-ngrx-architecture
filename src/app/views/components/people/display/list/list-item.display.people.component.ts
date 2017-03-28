import {Component, Input} from '@angular/core';

import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {ManagerPeopleService} from '../../../../../services/people/manager.people.service';


@Component({
  selector: 'ori-display-people-list-item',
  template: `
    <dl>
      <dt>Firstname</dt>
      <dd>{{ peopleItem.get('firstname') }}</dd>
      <dt>Lastname</dt>
      <dd>{{ peopleItem.get('lastname') }}</dd>
      <dt></dt>
      <dd>
        <a class="btn btn-link"
           [routerLink]="[ { outlets: { action: [peopleItem.getId()] } } ]"
           routerLinkActive="active" [hidden]="displayData?.routerLink">
          Afficher
        </a>
        <a class="btn btn-link"
           [routerLink]="[ { outlets: { action: [peopleItem.getId(), 'edit'] } } ]"
           routerLinkActive="active" [hidden]="displayData?.routerLink">
          Editer
        </a>
        <a class="btn btn-link" (click)="deleteItem()">
          Supprimer
        </a>
      </dd>
    </dl>
  `,
  styles: []
})
export class ListItemDisplayPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;

  constructor(private managerPeopleService: ManagerPeopleService) {}

  deleteItem() {
    this.managerPeopleService.deleteItem(this.peopleItem.getId());
  }

}
