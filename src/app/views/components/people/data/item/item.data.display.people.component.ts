import {Component} from '@angular/core';
import {ItemDataWatchedPeopleComponent} from './item.data.watched.people.components';

@Component({
  selector: 'ori-data-people-display-item',
  template: `    
    <ori-display-people-item [peopleItem]="peopleItem"></ori-display-people-item>
  `,
  styles: []
})
export class ItemDataDisplayPeopleComponent extends ItemDataWatchedPeopleComponent { }
