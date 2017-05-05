import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {EasyFormsModule} from 'angular2-easy-forms-enterthusiast/components';
import {ButtonsModule} from 'ng2-bootstrap';

import {ActivatedRouteCommonDirective} from '../adapters/activatedRoute.common.directive';

import {ApiCommonService} from '../services/api.common.service';
import {EffectCommonService} from '../services/effect.common.service';
import {SubjectCommonService} from '../services/subject.common.service';
import {TransformerCommonService} from '../services/transformer.common.service';
import {DecoratorCommonService} from '../services/decorator.common.service';
import {ItemFactoryCommonService} from '../services/item.factory.common.service';
import {ManagerCommonService} from '../services/manager.common.service';
import {ItemCommonService} from '../services/item.common.service';
import {EmbeddedManagerCommonService} from "../services/embedded.manager.common.service";
import {EmbeddedCommonService} from "../services/embedded.common.service";
import {ObjectEffectCommonService} from "../services/object.effect.common.service";


@NgModule({
  declarations: [
    ActivatedRouteCommonDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    HttpModule,
    EasyFormsModule
  ],
  providers: [
    ApiCommonService,
    EffectCommonService,
    SubjectCommonService,
    TransformerCommonService,
    DecoratorCommonService,
    ItemFactoryCommonService,
    ManagerCommonService,
    ItemCommonService,
    ObjectEffectCommonService,
    EmbeddedCommonService,
    EmbeddedManagerCommonService,
  ],
  exports: [
    ActivatedRouteCommonDirective
  ],
  bootstrap: []
})
export class CommonCrudModule { }
