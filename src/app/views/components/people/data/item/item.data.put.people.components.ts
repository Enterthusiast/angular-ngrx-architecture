import {Component} from '@angular/core';
import {ItemDataWatchedPeopleComponent} from './item.data.watched.people.components';

@Component({
  selector: 'ori-data-people-put-item',
  template: `    
    <ori-form-put-people-item [peopleItem]="peopleItem"></ori-form-put-people-item>
  `,
  styles: []
})
export class ItemDataPutPeopleComponent extends ItemDataWatchedPeopleComponent { }
