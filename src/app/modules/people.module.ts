import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {PeopleRoutingModule} from '../routers/people.router';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import {ButtonsModule} from 'ng2-bootstrap';

import {PeoplePageComponent} from '../views/pages/people-page/people-page.component';
import {ListDisplayPeopleComponent} from '../views/components/people/display/list/list.display.people.component';
import {ItemDisplayPeopleComponent} from '../views/components/people/display/item/item.display.people.component';
import {ListItemDisplayPeopleComponent} from '../views/components/people/display/list/list-item.display.people.component';
import {ItemFormPutPeopleComponent} from '../views/components/people/form/item/item.form.put.people.component';
import {ItemFormPostPeopleComponent} from '../views/components/people/form/item/item.form.post.people.component';

import {ApiPeopleService} from '../services/people/api.people.service';
import {TransformerPeopleService} from '../services/people/transformer.people.service';
import {FactoryPeopleService} from '../services/people/factory.people.service';
import {SubjectPeopleService} from '../services/people/subject.people.service';
import {EffectPeopleService} from '../services/people/effect.people.service';
import {DecoratorPeopleService} from '../services/people/decorator.people.service';
import {ManagerPeopleService} from '../services/people/manager.people.service';

import {ItemDataWatchedPeopleDirective} from '../views/components/people/data/item/item.data.watched.people.directive';
import {ListDataPeopleDirective} from '../views/components/people/data/list/list.data.people.directive';


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
