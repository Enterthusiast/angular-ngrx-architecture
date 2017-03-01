import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-people-list-item',
  template: `
    <dl>
      <dt>Firstname</dt>
      <dd>{{ peopleListItem.firstname }}</dd>
      <dt>Lastname</dt>
      <dd>{{ peopleListItem.lastname }}</dd>
    </dl>
  `,
  styles: []
})
export class ListItemDisplayPeopleComponent {

  @Input() peopleListItem: any;

  constructor() { }

}
