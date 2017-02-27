import { Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppStore } from '../../../../../reducers/app-store.interface';
import { TitleTestService } from '../../../../../services/test/title.test.service';

@Component({
  selector: 'app-sub-test-item',
  template: `
    <div>{{ title | async }}</div>
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
    // this.store.dispatch({ type: 'NEW_TITLE', payload: this.nextTitle });
    // this.store.dispatch({ type: 'NEW_TITLE_WITH_QUESTION_MARK', payload: this.nextTitle });

  }

}

