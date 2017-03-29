import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

import { TestModule } from './test.module';
import { PeopleModule } from '../people/modules/people.module';

import { AppRoutingModule } from '../routers/app.router';
import { TestRoutingModule } from '../routers/test.router';
import { PeopleRoutingModule } from '../people/routers/people.router';

import { titleTestReducer } from '../reducers/test/title.test.reducer';
import { peopleListReducer } from '../people/reducers/list.people.reducer';

import { AppPageComponent } from '../views/pages/app-page/app-page.component';
import { HomePageComponent } from '../views/pages/home-page/home-page.component';
import { AppNavComponent } from '../views/components/app/app-nav/app-nav.component';

import {ModelCommonService} from '../services/common/model/model.common.service';
import {environment} from '../../environments/environment';


// Add deepfreeze on stores while in development
// With deepfreeze you can't change a store state
// And that's the way it should be!
// A store must stay immutable or dangerous bug will occure
const metaReducers = environment.production
  ? [combineReducers]
  : [storeFreeze, combineReducers];

const store = compose(...metaReducers)({
  title: titleTestReducer,
  peopleList: peopleListReducer,
});

@NgModule({
  declarations: [
    AppPageComponent,
    HomePageComponent,
    AppNavComponent
  ],
  imports: [
    TestModule,
    PeopleModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(store),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    }),
    PeopleRoutingModule,
    TestRoutingModule,
    AppRoutingModule
  ],
  providers: [
    // RouterCommonService,
    ModelCommonService
  ],
  bootstrap: [AppPageComponent]
})
export class AppModule { }
