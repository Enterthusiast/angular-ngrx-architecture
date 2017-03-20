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
  selector: 'ori-data-people-list-item',
  template: `
    <div>I'm a people-list-item</div>
    <ori-display-people-list-item [peopleItem]="peopleItem" [displayData]="displayData"></ori-display-people-list-item>
  `,
  styles: []
})
export class ListItemDataPeopleComponent {

  private _peopleItem;

  @Input() set peopleItem(value) {
    this._peopleItem = value;
    if (this._peopleItem) {
      let peopleItemRoute = RouteMapController.getRouteAppClass(this._peopleItem.itemRouteId).link;
      peopleItemRoute = peopleItemRoute.replace(':id', this._peopleItem.getId());
      this.displayData.routerLinkShow = peopleItemRoute;
      this.displayData.routerLinkEdit = peopleItemRoute + '/edit';

    }
  };
  get peopleItem() {
    return this._peopleItem;
  }
  displayData: any = {};

  constructor () { }

}
