import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-people-list',
  template: `
    <div>ListDisplayPeopleComponent</div>
    <app-display-people-list-item *ngFor="let peopleListItem of peopleList" [peopleListItem]="peopleListItem"></app-display-people-list-item>
  `,
  styles: []
})
export class ListDisplayPeopleComponent {

  @Input() peopleList: any[];

  constructor() { }

}
