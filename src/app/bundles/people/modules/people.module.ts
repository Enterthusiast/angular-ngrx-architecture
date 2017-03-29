import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RoutingPeopleModule} from './routing.people.module';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import {ButtonsModule} from 'ng2-bootstrap';

import {PageViewPeopleComponent} from '../views/page.people.component';
import {ListViewPeopleComponent} from '../views/list.view.people.component';
import {ItemViewPeopleComponent} from '../views/item.view.people.component';
import {ItemListViewPeopleComponent} from '../views/item.list.view.people.component';
import {PutItemFormPeopleComponent} from '../forms/put.item.form.people.component';
import {PostItemFormPeopleComponent} from '../forms/post.item.form.people.component';

import {ApiPeopleService} from '../services/api.people.service';
import {TransformerPeopleService} from '../services/transformer.people.service';
import {FactoryPeopleService} from '../services/factory.people.service';
import {SubjectPeopleService} from '../services/subject.people.service';
import {EffectPeopleService} from '../services/effect.people.service';
import {DecoratorPeopleService} from '../services/decorator.people.service';
import {ManagerPeopleService} from '../services/manager.people.service';

import {WatchedItemDataPeopleDirective} from '../adapters/watched.item.data.people.directive';
import {ListDataPeopleDirective} from '../adapters/list.data.people.directive';


@NgModule({
  declarations: [
    PageViewPeopleComponent,
    ListViewPeopleComponent,
    ItemViewPeopleComponent,
    ItemListViewPeopleComponent,
    PutItemFormPeopleComponent,
    PostItemFormPeopleComponent,
    WatchedItemDataPeopleDirective,
    ListDataPeopleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    HttpModule,
    RoutingPeopleModule,
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
