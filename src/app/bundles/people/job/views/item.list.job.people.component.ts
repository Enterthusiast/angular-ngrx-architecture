import {Component, Input} from '@angular/core';

import {ItemJobPeopleClass} from '../models/item.job.people.class';
import {ManagerJobPeopleService} from '../services/manager.job.people.service';


@Component({
  selector: 'ori-item-list-job-people',
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
export class ItemListJobPeopleComponent {

  @Input() peopleItem: ItemJobPeopleClass;

  constructor(private managerPeopleService: ManagerJobPeopleService) {}

  deleteItem() {
    this.managerPeopleService.deleteItem(this.peopleItem.getId());
  }

}
