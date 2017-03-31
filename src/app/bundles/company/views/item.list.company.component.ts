import {Component, Input} from '@angular/core';

import {ItemCompanyClass} from '../models/item.company.class';
import {ManagerCompanyService} from '../services/manager.company.service';


@Component({
  selector: 'ori-item-list-company',
  template: `
    <dl>
      <dt>Name</dt>
      <dd>{{ companyItem.get('name') }}</dd>
      <dt>Email</dt>
      <dd>{{ companyItem.get('email') }}</dd>
      <dt></dt>
      <dd>
        <a class="btn btn-link"
           [routerLink]="[ { outlets: { action: [companyItem.getId()] } } ]"
           routerLinkActive="active" [hidden]="displayData?.routerLink">
          Afficher
        </a>
        <a class="btn btn-link"
           [routerLink]="[ { outlets: { action: [companyItem.getId(), 'edit'] } } ]"
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
export class ItemListCompanyComponent {

  @Input() companyItem: ItemCompanyClass;

  constructor(private managerCompanyService: ManagerCompanyService) {}

  deleteItem() {
    this.managerCompanyService.deleteItem(this.companyItem.getId());
  }

}
