import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppState } from '../stores/IAppState';

@Injectable()
export class TitleService {

  constructor(private store: Store<IAppState>) { }

  setTitle(title): void {
    this.store.dispatch({ type: 'NEW_TITLE', payload: title });
  }

  setTitleWithQuestionMark(title): void {
    this.store.dispatch({ type: 'NEW_TITLE_WITH_QUESTION_MARK', payload: `${title}?` });
  }

}
