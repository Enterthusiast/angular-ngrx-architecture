import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PeoplePageComponent } from '../views/pages/people-page/people-page.component';
import { ItemDataPeopleComponent } from '../views/components/people/data/item/item.data.people.component';
import { ListDataPeopleComponent } from '../views/components/people/data/list/list.data.people.component';
import { PeopleRoutingModule } from '../routers/people.router';
import { ApiPeopleService } from '../services/people/api/api.people.service';
import {ItemDisplayPeopleComponent} from "../views/components/people/display/item/item.display.people.component";
import {ListDisplayPeopleComponent} from "../views/components/people/display/list/list.display.people.component";
import {ListItemDisplayPeopleComponent} from "../views/components/people/display/list/list-item.display.people.component";

@NgModule({
  declarations: [
    PeoplePageComponent,
    ItemDataPeopleComponent,
    ListDataPeopleComponent,
    ItemDisplayPeopleComponent,
    ListDisplayPeopleComponent,
    ListItemDisplayPeopleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PeopleRoutingModule
  ],
  providers: [
    ApiPeopleService
  ],
  bootstrap: []
})
export class PeopleModule { }
