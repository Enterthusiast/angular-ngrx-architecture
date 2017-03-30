import { Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../root/reducers/app-store.interface';
import { TitlePlaygroundService } from '../services/title.playground.service';

@Component({
  selector: 'ori-click-playground',
  template: `
    <div (click)="changeTitle()">{{ title | async }}</div>
  `,
  styles:  []
})
export class ClickPlaygroundComponent {
  title: Observable<string>;

  @Input() myService: TitlePlaygroundService;

  constructor (
    private store: Store<IAppStore>
  ) {

    this.title = store.select('title');

  }

  changeTitle() {

    this.myService.setTitle('my sub title');

  }

}

