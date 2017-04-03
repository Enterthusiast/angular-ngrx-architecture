import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

import {PeopleModule} from '../../people/modules/people.module';
import {CompanyModule} from '../../company/modules/company.module';
import {PlaygroundModule} from '../../playground/modules/playground.module';

import {RootRoutingModule} from './root.routing.module';
import {RoutingPeopleModule} from '../../people/modules/routing.people.module';
import {RoutingCompanyModule} from '../../company/modules/routing.company.module';
import {RoutingPlaygroundModule} from '../../playground/modules/routing.playground.module';

import {peopleReducer} from '../../people/reducers/people.reducer';
import {companyReducer} from '../../company/reducers/company.reducer';
import {playgroundReducer} from '../../playground/reducers/playground.reducer';

import {PageRootComponent} from '../views/page.root.component';
import {WelcomeRootComponent} from '../views/welcome.root.component';
import {NavigationRootComponent} from '../views/navigation.root.component';

import {ApiCommonService} from '../../common/services/api.common.service';
import {DecoratorCommonService} from '../../common/services/decorator.common.service';
import {EffectCommonService} from '../../common/services/effect.common.service';
import {ItemCommonService} from '../../common/services/item.common.service';
import {ItemFactoryCommonService} from '../../common/services/item.factory.common.service';
import {ManagerCommonService} from '../../common/services/manager.common.service';
import {SubjectCommonService} from '../../common/services/subject.common.service';
import {TransformerCommonService} from '../../common/services/transformer.common.service';

import {NavigationRootService} from '../services/navigation.root.service';

import {environment} from '../../../../environments/environment';


// Add deepfreeze on reducers while in development
// With deepfreeze you can't change a store state
// And that's the way it should be!
// A store must stay immutable or dangerous bug will occure
const metaReducers = environment.production
  ? [combineReducers]
  : [storeFreeze, combineReducers];

const store = compose(...metaReducers)({
  title: playgroundReducer,
  people: peopleReducer,
  company: companyReducer
});

@NgModule({
  declarations: [
    PageRootComponent,
    WelcomeRootComponent,
    NavigationRootComponent
  ],
  imports: [
    PlaygroundModule,
    PeopleModule,
    CompanyModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(store),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    }),
    RoutingPeopleModule,
    RoutingCompanyModule,
    RoutingPlaygroundModule,
    RootRoutingModule
  ],
  providers: [
    ApiCommonService,
    DecoratorCommonService,
    EffectCommonService,
    ItemCommonService,
    ItemFactoryCommonService,
    ManagerCommonService,
    TransformerCommonService,
    SubjectCommonService,
    NavigationRootService
  ],
  bootstrap: [PageRootComponent]
})
export class RootModule { }
