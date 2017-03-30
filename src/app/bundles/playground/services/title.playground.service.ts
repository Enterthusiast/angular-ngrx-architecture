import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IRootStore } from '../../root/reducers/root.store.interface';
import { ITitleServicePlayground } from './titleservice.playground.interface';

@Injectable()
export class TitlePlaygroundService implements ITitleServicePlayground {

  constructor(private store: Store<IRootStore>) {}

  setTitle(title): void {
    this.store.dispatch({ type: 'TEST_TITLE_NEW_TITLE', payload: title });
  }

  setTitleWithQuestionMark(title): void {
    this.store.dispatch({ type: 'TEST_TITLE_NEW_TITLE', payload: `${title}?` });
  }

}
