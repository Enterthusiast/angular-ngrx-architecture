import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TestModule } from './test.module';
import { PeopleModule } from './people.module';

import { AppRoutingModule } from '../routers/app.router';
import { TestRoutingModule } from '../routers/test.router';
import { PeopleRoutingModule } from '../routers/people.router';

import { routerAppReducer } from '../reducers/app/router.app.reducer';
import { titleTestReducer } from '../reducers/test/title.test.reducer';
import { apiPeopleReducer } from '../reducers/people/api.people.reducer';

import { AppComponent } from '../views/pages/app-page/app.component';
import { HomePageComponent } from '../views/pages/home-page/home-page.component';
import { AppNavComponent } from '../views/components/app/app-nav/app-nav.component';

import { RouterCommonService } from '../services/common/router/router.common.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppNavComponent
  ],
  imports: [
    TestModule,
    PeopleModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      title: titleTestReducer
      , people: apiPeopleReducer
      , router: routerAppReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    }),
    PeopleRoutingModule,
    TestRoutingModule,
    AppRoutingModule
  ],
  providers: [
    RouterCommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
