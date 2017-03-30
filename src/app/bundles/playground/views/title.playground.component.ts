import {Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../root/reducers/app-store.interface';

import { TitlePlaygroundService } from '../services/title.playground.service';
import { CaramelTitlePlaygroundService } from '../services/caramel.title.playground.service';
import { ChocolateTitlePlaygroundService } from '../services/chocolate.title.playground.service';

@Component({
  selector: 'ori-title-playground',
  providers: [
    { provide: TitlePlaygroundService, useClass: CaramelTitlePlaygroundService },
    { provide: ChocolateTitlePlaygroundService, useClass: ChocolateTitlePlaygroundService }
  ],
  template: `
    <h1>
      {{title | async}}
    </h1>
    <input type="text" [(ngModel)]="nextTitle">
    <button (click)="changeTitle()">Change Title</button>

    <div ori-eventemitter-playground (outputField)="bindToData($event)">data from dir: {{ dataFromDirective }}
    </div>

    <ori-click-playground [myService]="childService"></ori-click-playground>
  `,
  styles:  []
})
export class TitlePlaygroundComponent {
  title: Observable<string>;
  nextTitle: string;
  dataFromDirective: string;

  constructor (
    private store: Store<IAppStore>
    , private titleService: TitlePlaygroundService
    , private childService: ChocolateTitlePlaygroundService
  ) {

    this.title = store.select('title');

  }

  bindToData($event) {
    this.dataFromDirective = $event;
  }

  changeTitle() {

    this.titleService.setTitle(this.nextTitle);

  }

}
