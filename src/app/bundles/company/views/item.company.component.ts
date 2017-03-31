import {Component, HostBinding, Input} from '@angular/core';

import {ItemCompanyClass} from '../models/item.company.class';
import {WatchedItemDataCompanyDirective} from '../adapters/watched.item.data.company.directive';


@Component({
  selector: 'ori-item-company',
  template: `
    <div ori-watched-item-data-company (dataEmitter)="companyItem=$event"></div>
    <div>{{ companyItem?.attributes?.name }}</div>
    <div>{{ companyItem?.attributes?.email }}</div>
    <div>{{ companyItem?.attributes?.website_url }}</div>
  `,
  styles: []
})
export class ItemCompanyComponent {
  companyItem: ItemCompanyClass;
}
