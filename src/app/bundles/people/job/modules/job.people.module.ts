import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {CommonCrudModule} from '../../../common/modules/common.crud.module';
import {RoutingJobPeopleModule} from './routing.job.people.module';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import {ButtonsModule} from 'ng2-bootstrap';

import {PageJobPeopleComponent} from '../views/page.job.people.component';
import {ListJobPeopleComponent} from '../views/list.job.people.component';
import {ItemJobPeopleComponent} from '../views/item.job.people.component';
import {ItemListJobPeopleComponent} from '../views/item.list.job.people.component';
import {PutItemFormJobPeopleComponent} from '../forms/put.item.form.job.people.component';
import {PostItemFormJobPeopleComponent} from '../forms/post.item.form.job.people.component';

import {WatchedItemDataJobPeopleDirective} from '../adapters/watched.item.data.job.people.directive';
import {ListDataJobPeopleDirective} from '../adapters/list.data.job.people.directive';

import {ApiJobPeopleService} from '../services/api.job.people.service';
import {TransformerJobPeopleService} from '../services/transformer.job.people.service';
import {FactoryJobPeopleService} from '../services/factory.job.people.service';
import {SubjectJobPeopleService} from '../services/subject.job.people.service';
import {EffectJobPeopleService} from '../services/effect.job.people.service';
import {DecoratorJobPeopleService} from '../services/decorator.job.people.service';
import {ManagerJobPeopleService} from '../services/manager.job.people.service';
import {ItemJobPeopleService} from '../services/item.job.people.service';


@NgModule({
  declarations: [
    PageJobPeopleComponent,
    ListJobPeopleComponent,
    ItemJobPeopleComponent,
    ItemListJobPeopleComponent,
    PutItemFormJobPeopleComponent,
    PostItemFormJobPeopleComponent,
    WatchedItemDataJobPeopleDirective,
    ListDataJobPeopleDirective
  ],
  imports: [
    CommonModule,
    CommonCrudModule,
    FormsModule,
    ButtonsModule,
    HttpModule,
    RoutingJobPeopleModule,
    EasyFormsModule
  ],
  providers: [
    ApiJobPeopleService,
    EffectJobPeopleService,
    SubjectJobPeopleService,
    TransformerJobPeopleService,
    DecoratorJobPeopleService,
    FactoryJobPeopleService,
    ManagerJobPeopleService,
    ItemJobPeopleService
  ],
  bootstrap: []
})
export class JobPeopleModule { }
