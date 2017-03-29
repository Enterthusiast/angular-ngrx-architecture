import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {PeopleRoutingModule} from '../routers/people.router';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import {ButtonsModule} from 'ng2-bootstrap';

import {PeoplePageComponent} from '../../views/pages/people-page/people-page.component';
import {ListDisplayPeopleComponent} from '../views/list.display.people.component';
import {ItemDisplayPeopleComponent} from '../views/item.display.people.component';
import {ListItemDisplayPeopleComponent} from '../views/list-item.display.people.component';
import {ItemFormPutPeopleComponent} from '../forms/item.form.put.people.component';
import {ItemFormPostPeopleComponent} from '../forms/item.form.post.people.component';

import {ApiPeopleService} from '../services/api.people.service';
import {TransformerPeopleService} from '../services/transformer.people.service';
import {FactoryPeopleService} from '../services/factory.people.service';
import {SubjectPeopleService} from '../services/subject.people.service';
import {EffectPeopleService} from '../services/effect.people.service';
import {DecoratorPeopleService} from '../services/decorator.people.service';
import {ManagerPeopleService} from '../services/manager.people.service';

import {ItemDataWatchedPeopleDirective} from '../adapters/item.data.watched.people.directive';
import {ListDataPeopleDirective} from '../adapters/list.data.people.directive';


@NgModule({
  declarations: [
    PeoplePageComponent,
    ListDisplayPeopleComponent,
    ItemDisplayPeopleComponent,
    ListItemDisplayPeopleComponent,
    ItemFormPutPeopleComponent,
    ItemFormPostPeopleComponent,
    ItemDataWatchedPeopleDirective,
    ListDataPeopleDirective
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
    EffectPeopleService,
    SubjectPeopleService,
    TransformerPeopleService,
    DecoratorPeopleService,
    FactoryPeopleService,
    ManagerPeopleService
  ],
  bootstrap: []
})
export class PeopleModule { }
