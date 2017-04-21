import {Component, Input} from '@angular/core';

import {ItemJobPeopleClass} from '../models/item.job.people.class';
import {ManagerJobPeopleService} from '../services/manager.job.people.service';


@Component({
  selector: 'ori-item-list-job-people',
  template: `
    <dl>
      <dt>Title</dt>
      <dd>{{ jobPeopleItem.get('title') }}</dd>
      <dt>Summary</dt>
      <dd>{{ jobPeopleItem.get('summary') }}</dd>
      <dt></dt>
      <dd>
        <a class="btn btn-link"
           [routerLink]="[ { outlets: { action: [jobPeopleItem.getId()] } } ]"
           routerLinkActive="active" [hidden]="displayData?.routerLink">
          Afficher
        </a>
        <a class="btn btn-link"
           [routerLink]="[ { outlets: { action: [jobPeopleItem.getId(), 'edit'] } } ]"
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

  @Input() jobPeopleItem: ItemJobPeopleClass;

  constructor(private managerPeopleService: ManagerJobPeopleService) {}

  deleteItem() {
    this.managerPeopleService.deleteItem(this.jobPeopleItem.getId());
  }

}
