import { Component } from '@angular/core';

import { Store, ActionReducer, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as Rx from 'rxjs/Rx'; //

interface AppState {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: Observable<string>;

  constructor (private store: Store<AppState>) {

    this.title = store.select('title');
    setTimeout(() => this.store.dispatch({ type: 'NEW_TITLE', payload: 'Goodbye World' }), 1000);

  }

}