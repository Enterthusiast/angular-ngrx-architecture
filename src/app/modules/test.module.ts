import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TestPageComponent } from '../views/pages/test-page/test-page.component';
import { TestItemComponent } from '../views/components/test/test-item/test-item.component';
import { TestListComponent } from '../views/components/test/test-list/test-list.component';
import { SubTestItemComponent } from '../views/components/test/sub-test/sub-test-item/sub-test-item.component';
import { TestRoutingModule } from '../routers/test.router';
import { TitleTestService } from '../services/test/title.test.service';
import { CaramelTitleTestService } from '../services/test/caramel.title.test.service';
import { ChocolateTitleTestService } from '../services/test/chocolate.title.test.service';

@NgModule({
  declarations: [
    TestPageComponent,
    TestItemComponent,
    TestListComponent,
    SubTestItemComponent
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
