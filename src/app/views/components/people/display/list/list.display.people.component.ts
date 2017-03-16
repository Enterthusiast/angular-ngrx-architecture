import {Component, Input} from '@angular/core';

@Component({
  selector: 'ori-display-people-list',
  template: `
    <div>ListDisplayPeopleComponent</div>
    <ori-display-people-list-item *ngFor="let peopleListItem of peopleList" [peopleListItem]="peopleListItem"></ori-display-people-list-item>
  `,
  styles: []
})
export class ListDisplayPeopleComponent {

  @Input() peopleList: any[];

  constructor() { }

}
