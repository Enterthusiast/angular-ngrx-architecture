import { Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../root/reducers/app-store.interface';
import { TitleTestService } from '../services/title.test.service';

@Component({
  selector: 'ori-sub-test-item',
  template: `
    <div (click)="changeTitle()">{{ title | async }}</div>
  `,
  styles:  []
})
export class SubTestItemComponent {
  title: Observable<string>;

  @Input() myService: TitleTestService;

  constructor (
    private store: Store<IAppStore>
  ) {

    this.title = store.select('title');

  }

  changeTitle() {

    this.myService.setTitle('my sub title');

  }

}

