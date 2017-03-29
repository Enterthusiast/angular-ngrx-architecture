import {Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../root/reducers/app-store.interface';

import { TitleTestService } from '../services/title.test.service';
import { CaramelTitleTestService } from '../services/caramel.title.test.service';
import { ChocolateTitleTestService } from '../services/chocolate.title.test.service';

@Component({
  selector: 'ori-test-item',
  providers: [
    { provide: TitleTestService, useClass: CaramelTitleTestService },
    { provide: ChocolateTitleTestService, useClass: ChocolateTitleTestService }
  ],
  template: `
     <h1>
       {{title | async}}
     </h1>
     <input type="text" [(ngModel)]="nextTitle">
     <button (click)="changeTitle()">Change Title</button>
     
     <div test-directive (outputField)="bindToData($event)">data from dir: {{ dataFromDirective }}</div>
     
     <ori-sub-test-item [myService]="childService"></ori-sub-test-item>
  `,
  styles:  []
})
export class TestItemComponent {
  title: Observable<string>;
  nextTitle: string;
  dataFromDirective: string;

  constructor (
    private store: Store<IAppStore>
    , private titleService: TitleTestService
    , private childService: ChocolateTitleTestService
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
