import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PeoplePageComponent } from '../views/pages/people-page/people-page.component';
import { ItemDataPeopleComponent } from '../views/components/people/data/item/item.data.people.component';
import { ListDataPeopleComponent } from '../views/components/people/data/list/list.data.people.component';
import { PeopleRoutingModule } from '../routers/people.router';
import { ApiPeopleService } from '../services/people/api.people.service';
import { ItemDisplayPeopleComponent } from '../views/components/people/display/item/item.display.people.component';
import { ListDisplayPeopleComponent } from '../views/components/people/display/list/list.display.people.component';
import { ListItemDisplayPeopleComponent } from '../views/components/people/display/list/list-item.display.people.component';
import {TransformerPeopleService} from "../services/people/transformer.people.service";
import {FactoryPeopleService} from "../services/people/factory.people.service";
import {EasyFormsModule} from "angular2-easy-forms-enterthusiast/components";
import { ButtonsModule } from 'ng2-bootstrap';

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
    ButtonsModule,
    HttpModule,
    PeopleRoutingModule,
    EasyFormsModule
  ],
  providers: [
    ApiPeopleService,
    TransformerPeopleService,
    FactoryPeopleService
  ],
  bootstrap: []
})
export class PeopleModule { }
