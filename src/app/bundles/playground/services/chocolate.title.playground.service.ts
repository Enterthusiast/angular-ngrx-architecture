import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../root/reducers/app-store.interface';
import { ITitleServicePlayground } from './titleservice.playground.interface';

@Injectable()
export class ChocolateTitlePlaygroundService implements ITitleServicePlayground {

  constructor(private store: Store<IAppStore>) {}

  setTitle(title): void {
    this.store.dispatch({ type: 'TEST_TITLE_NEW_TITLE', payload: title + ' au chocolat, mon préféré!' });
  }

  setTitleWithQuestionMark(title): void {
    this.store.dispatch({ type: 'TEST_TITLE_NEW_TITLE', payload: `${title} au chocolat?` });
  }

}
