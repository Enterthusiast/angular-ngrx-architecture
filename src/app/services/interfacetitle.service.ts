import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAppState } from '../stores/IAppState';
import { ITitleService } from './ITitle.service';

@Injectable()
export class InterfaceTitleService implements ITitleService {

  constructor(private store: Store<IAppState>) {}

  setTitle(title): void {
    /* DO NOTHING ON PURPOSE */
  }

  setTitleWithQuestionMark(title): void {
    /* DO NOTHING ON PURPOSE */
  }

}
