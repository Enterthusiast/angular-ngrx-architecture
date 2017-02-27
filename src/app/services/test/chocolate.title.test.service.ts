import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../reducers/app-store.interface';
import { ITitleTestService } from './title.test.interface';

@Injectable()
export class ChocolateTitleTestService implements ITitleTestService {

  constructor(private store: Store<IAppStore>) {}

  setTitle(title): void {
    this.store.dispatch({ type: 'NEW_TITLE', payload: title + ' au chocolat, mon préféré!' });
  }

  setTitleWithQuestionMark(title): void {
    this.store.dispatch({ type: 'NEW_TITLE', payload: `${title} au chocolat?` });
  }

}
