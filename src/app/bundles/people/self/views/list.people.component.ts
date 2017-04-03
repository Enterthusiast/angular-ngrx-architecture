import { Component } from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {ListDataPeopleDirective} from '../adapters/list.data.people.directive';


@Component({
  selector: 'ori-list-people',
  template: `
    <div ori-list-data-people (dataEmitter)="peopleList=$event"></div>
    <div class="col-md-6">
      <ori-item-list-people *ngFor="let peopleItem of peopleList" [peopleItem]="peopleItem"></ori-item-list-people>
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
export class ListPeopleComponent {
  peopleList: ItemPeopleClass[];
}
