import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

import {PlaygroundModule} from '../../playground/modules/playground.module';
import {PeopleModule} from '../../people/modules/people.module';

import {RootRoutingModule} from './root.routing.module';
import {RoutingPlaygroundModule} from '../../playground/modules/routing.playground.module';
import {RoutingPeopleModule} from '../../people/modules/routing.people.module';

import {playgroundReducer} from '../../playground/reducers/playground.reducer';
import {peopleReducer} from '../../people/reducers/people.reducer';

import {PageRootComponent} from '../views/page.root.component';
import {WelcomeRootComponent} from '../views/welcome.root.component';
import {NavigationRootComponent} from '../views/navigation.root.component';

import {ModelCommonService} from '../../common/services/model.common.service';
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
  people: peopleReducer
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
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(store),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    }),
    RoutingPeopleModule,
    RoutingPlaygroundModule,
    RootRoutingModule
  ],
  providers: [
    ModelCommonService,
    NavigationRootService
  ],
  bootstrap: [PageRootComponent]
})
export class RootModule { }
