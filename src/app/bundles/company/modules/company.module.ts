import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RoutingCompanyModule} from './routing.company.module';
import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import {ButtonsModule} from 'ng2-bootstrap';

import {PageCompanyComponent} from '../views/page.company.component';
import {ListCompanyComponent} from '../views/list.company.component';
import {ItemCompanyComponent} from '../views/item.company.component';
import {ItemListCompanyComponent} from '../views/item.list.company.component';
import {PutItemFormCompanyComponent} from '../forms/put.item.form.company.component';
import {PostItemFormCompanyComponent} from '../forms/post.item.form.company.component';

import {ApiCompanyService} from '../services/api.company.service';
import {TransformerCompanyService} from '../services/transformer.company.service';
import {FactoryCompanyService} from '../services/factory.company.service';
import {SubjectCompanyService} from '../services/subject.company.service';
import {EffectCompanyService} from '../services/effect.company.service';
import {DecoratorCompanyService} from '../services/decorator.company.service';
import {ManagerCompanyService} from '../services/manager.company.service';

import {WatchedItemDataCompanyDirective} from '../adapters/watched.item.data.company.directive';
import {ListDataCompanyDirective} from '../adapters/list.data.company.directive';


@NgModule({
  declarations: [
    PageCompanyComponent,
    ListCompanyComponent,
    ItemCompanyComponent,
    ItemListCompanyComponent,
    PutItemFormCompanyComponent,
    PostItemFormCompanyComponent,
    WatchedItemDataCompanyDirective,
    ListDataCompanyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    HttpModule,
    RoutingCompanyModule,
    EasyFormsModule
  ],
  providers: [
    ApiCompanyService,
    EffectCompanyService,
    SubjectCompanyService,
    TransformerCompanyService,
    DecoratorCompanyService,
    FactoryCompanyService,
    ManagerCompanyService
  ],
  bootstrap: []
})
export class CompanyModule { }
