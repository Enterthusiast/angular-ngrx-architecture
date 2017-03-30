import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Store } from '@ngrx/store';

import { IRootStore } from '../../root/reducers/root.store.interface';
import { ITitleServicePlayground } from './titleservice.playground.interface';

import {privateParams} from '../../../../privateparams';


@Injectable()
export class CaramelTitlePlaygroundService implements ITitleServicePlayground {

  private headers = new Headers({
    'Content-Type': 'application/json'
    , 'Authorization': 'Basic ' + btoa(privateParams.logins.origamiDev)
  });
  private companiesUrl = privateParams.links.origamiCompanies;

  constructor(private store: Store<IRootStore>, private http: Http) {}

  setTitle(title): void {
    this.http.get(this.companiesUrl, {headers: this.headers}).subscribe(res => {
      const json = res.json();
      const companyName = json._embedded.companies[0].name;
      this.store.dispatch({ type: 'TEST_TITLE_NEW_TITLE', payload: `${title} au caramel de chez ${companyName}, mon préféré!` });
    });
  }

  setTitleWithQuestionMark(title): void {
    this.store.dispatch({ type: 'TEST_TITLE_NEW_TITLE', payload: `${title} au chocolat?` });
  }

}
