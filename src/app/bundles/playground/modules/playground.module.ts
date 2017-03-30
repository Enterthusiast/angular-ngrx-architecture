import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {PagePlaygroundComponent} from '../views/page.playground.component';
import {TitlePlaygroundComponent} from '../views/title.playground.component';
import {ListPlaygroundComponent} from '../views/list.playground.component';
import {ClickPlaygroundComponent} from '../views/click.playground.component';
import {RoutingPlaygroundModule} from './routing.playground.module';
import {TitlePlaygroundService} from '../services/title.playground.service';
import {CaramelTitlePlaygroundService} from '../services/caramel.title.playground.service';
import {ChocolateTitlePlaygroundService} from '../services/chocolate.title.playground.service';
import {EventemitterPlaygroundDirective} from '../views/eventemitter.playground.directive';


@NgModule({
  declarations: [
    PagePlaygroundComponent,
    TitlePlaygroundComponent,
    ListPlaygroundComponent,
    ClickPlaygroundComponent,
    EventemitterPlaygroundDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RoutingPlaygroundModule
  ],
  providers: [
    TitlePlaygroundService,
    CaramelTitlePlaygroundService,
    ChocolateTitlePlaygroundService
  ],
  bootstrap: []
})
export class PlaygroundModule { }
