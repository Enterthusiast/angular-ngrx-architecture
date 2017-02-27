import { Component, Input} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from './stores/IAppState';

import { InterfaceTitleService } from './services/interfacetitle.service';
import { TitleAuChocolatService } from "./services/titleauchocolat.service";
import { TitleAuCaramelService } from "./services/titleaucaramel.service";
import { TitleService } from "./services/title.service";

@Component({
  selector: 'app-child',
  providers: [
    InterfaceTitleService
  ],
  template: `
    <div (click)="changeTitle()">{{ title | async }}</div>
  `,
  styles:  []
})
export class ChildComponent {
  title: Observable<string>;
  nextTitle: string;

  @Input() myService: InterfaceTitleService;

  constructor (
    private store: Store<IAppState>,
    myService: InterfaceTitleService
  ) {

    this.title = store.select('title');

  }

  changeTitle() {

    this.myService.setTitle('my child title');
    // this.store.dispatch({ type: 'NEW_TITLE', payload: this.nextTitle });
    // this.store.dispatch({ type: 'NEW_TITLE_WITH_QUESTION_MARK', payload: this.nextTitle });

  }

}
