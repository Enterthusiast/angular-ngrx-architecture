import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-people-item',
  template: `
    <div>ItemDisplayPeopleComponent</div>
    <div>{{ peopleItem }}</div>
  `,
  styles: []
})
export class ItemDisplayPeopleComponent {

  @Input() peopleItem: any;

  constructor() { }

}
