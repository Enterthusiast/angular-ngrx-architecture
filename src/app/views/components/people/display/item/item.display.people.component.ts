import {Component, Input} from '@angular/core';
import {ApiPeopleService} from "../../../../../services/people/api.people.service";
import {ItemPeopleClass} from "../../../../../models/people/item.people.class";
import {TransformerPeopleService} from "../../../../../services/people/transformer.people.service";

@Component({
  selector: 'app-display-people-item',
  template: `
    <div>ItemDisplayPeopleComponent</div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <input [(ngModel)]="firstname">
    <button (click)="putModel()">Change Firstname</button>
  `,
  styles: []
})
export class ItemDisplayPeopleComponent {

  @Input() peopleItem: ItemPeopleClass;
  firstname = '';

  constructor(private apiPeopleService: ApiPeopleService,
    private transformerPeopleService: TransformerPeopleService) {
  }

  putModel() {
    const attributesToPut = this.transformerPeopleService.toPutAttributes(this.peopleItem.getAttributes());
    attributesToPut.firstname = this.firstname;
    this.apiPeopleService.putItem(attributesToPut, this.peopleItem.get('uuid'));
  }

}
