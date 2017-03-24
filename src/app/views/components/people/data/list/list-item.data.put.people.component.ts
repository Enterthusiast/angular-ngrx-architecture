import {Component, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../../../reducers/app-store.interface';
import * as _ from 'lodash';
import {FactoryPeopleService} from '../../../../../services/people/factory.people.service';
import {ItemPeopleClass} from '../../../../../models/people/item.people.class';
import {RouteMapController} from '../../../../../controllers/app/route-map/route-map.app.controller';

@Component({
  selector: 'ori-data-put-people-list-item',
  template: `    
    <ori-form-put-people-item [peopleItem]="peopleItem"></ori-form-put-people-item>
  `,
  styles: []
})
export class ListItemDataPutPeopleComponent {

  @Input() peopleItem;

  constructor () { }

}
