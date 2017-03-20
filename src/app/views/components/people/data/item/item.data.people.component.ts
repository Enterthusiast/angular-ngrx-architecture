import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiPeopleService} from '../../../../../services/people/api.people.service';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../../../reducers/app-store.interface';
import * as _ from 'lodash';
import {FactoryPeopleService} from '../../../../../services/people/factory.people.service';
import {ItemPeopleClass} from "../../../../../models/people/item.people.class";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'ori-data-people-item',
  template: `
    <div>I'm a people-item</div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ItemDataPeopleComponent { }
