import { Component } from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {ListDataPeopleDirective} from '../adapters/list.data.people.directive';


@Component({
  selector: 'ori-display-people-list',
  template: `    
    <div ori-data-people-list (dataEmitter)="peopleList=$event"></div>
    <div class="col-md-6">
      <ori-display-people-list-item *ngFor="let peopleItem of peopleList" [peopleItem]="peopleItem"></ori-display-people-list-item>
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
export class ListDisplayPeopleComponent {
  peopleList: ItemPeopleClass[];
}
