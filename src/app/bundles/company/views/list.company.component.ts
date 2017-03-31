import { Component } from '@angular/core';

import {ItemCompanyClass} from '../models/item.company.class';
import {ListDataCompanyDirective} from '../adapters/list.data.company.directive';


@Component({
  selector: 'ori-list-company',
  template: `
    <div ori-list-data-company (dataEmitter)="companyList=$event"></div>
    <div class="col-md-6">
      <ori-item-list-company *ngFor="let companyItem of companyList"
                             [companyItem]="companyItem"></ori-item-list-company>
    </div>
    <div class="col-md-6">
      <div class="fixed">
        <router-outlet name="action"></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .fixed {
      display: block;
      position: fixed;
      top: 128px;
      left: 50%;
      width: 50%;
    }
    .block {
      display: block;
    }
    .inlineblock {
      display: inline-block;
      vertical-align: top;
    }
  `]
})
export class ListCompanyComponent {
  companyList: ItemCompanyClass[];
}
