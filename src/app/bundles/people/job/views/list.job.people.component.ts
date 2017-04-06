import { Component } from '@angular/core';

import {ItemJobPeopleClass} from '../models/item.job.people.class';
import {ListDataJobPeopleDirective} from '../adapters/list.data.job.people.directive';


@Component({
  selector: 'ori-list-job-people',
  template: `
    <div ori-list-data-job-people (dataEmitter)="peopleList=$event"></div>
    <div class="col-md-6">
      <ori-item-list-job-people *ngFor="let peopleItem of peopleList" [peopleItem]="peopleItem"></ori-item-list-job-people>
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
export class ListJobPeopleComponent {
  peopleList: ItemJobPeopleClass[];
}
