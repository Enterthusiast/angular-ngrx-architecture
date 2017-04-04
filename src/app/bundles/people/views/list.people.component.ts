import { Component } from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {ListDataPeopleDirective} from '../adapters/list.data.people.directive';


@Component({
  selector: 'ori-list-people',
  template: `
    <div class="wrapperLeft">
        <ori-item-list-people *ngFor="let peopleItem of peopleList" [peopleItem]="peopleItem"></ori-item-list-people> 
    </div><!--
    --><div class="wrapperRight">
        <div ori-list-data-people (dataEmitter)="peopleList=$event"></div>
        <router-outlet name="action"></router-outlet>
    </div>
 
      
    
   
  `,
  styles: [`
    ori-item-list-people {
      width:calc (50% - 40px);
      display: inherit;
      margin:20px;
  `]
})
export class ListPeopleComponent {
  peopleList: ItemPeopleClass[];
}
