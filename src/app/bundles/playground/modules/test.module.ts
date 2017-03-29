import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {TestPageComponent} from '../views/test-page.component';
import {TestItemComponent} from '../views/test-item.component';
import {TestListComponent} from '../views/test-list.component';
import {SubTestItemComponent} from '../views/sub-test-item.component';
import {TestRoutingModule} from '../routers/test.router';
import {TitleTestService} from '../services/title.test.service';
import {CaramelTitleTestService} from '../services/caramel.title.test.service';
import {ChocolateTitleTestService} from '../services/chocolate.title.test.service';
import {TestDirective} from '../views/test.directive';


@NgModule({
  declarations: [
    TestPageComponent,
    TestItemComponent,
    TestListComponent,
    SubTestItemComponent,
    TestDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TestRoutingModule
  ],
  providers: [
    TitleTestService,
    CaramelTitleTestService,
    ChocolateTitleTestService
  ],
  bootstrap: []
})
export class TestModule { }
