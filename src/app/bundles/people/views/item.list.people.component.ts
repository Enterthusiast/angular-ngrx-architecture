import {Component, Input} from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {ManagerPeopleService} from '../services/manager.people.service';


@Component({
  selector: 'ori-item-list-people',
  template: `
    <div class="layoutBox">
      <div class="layoutBox__header">
        
      </div>
      <div class="layoutBox__content">
          <div class="layoutBox__img"> 
        <figure class="figureCircle">
          <img src="src/assets/images/noPhoto.png" class="imgCircle">
        </figure>         
        </div>
        <div class="layoutBox__bestInfo">
          {{ peopleItem.get('firstname') }}
          <br>
          {{ peopleItem.get('lastname') }}
          <br>
            <i class="fa fa-building" aria-hidden="true"></i>
            Nom de la companie
        </div>
      </div>
      <div class="layoutBox__action">
        <button class="btn btn--display "
           [routerLink]="[ { outlets: { action: [peopleItem.getId()] } } ]"
           routerLinkActive="active" [hidden]="displayData?.routerLink">
            <i class="fa fa-hand-o-right" aria-hidden="true"></i>
        </button>
        <button class="btn btn--edit"
           [routerLink]="[ { outlets: { action: [peopleItem.getId(), 'edit'] } } ]"
           routerLinkActive="active" [hidden]="displayData?.routerLink">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button class="btn btn--delete" (click)="deleteItem()">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div class="layoutBox__status layoutBox__status--pub">
          Publié
      </div>
   </div>
  `,
  styleUrls: ['./layoutBox.scss']
})
export class ItemListPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;

  constructor(private managerPeopleService: ManagerPeopleService) {}

  deleteItem() {
    this.managerPeopleService.deleteItem(this.peopleItem.getId());
  }

}
