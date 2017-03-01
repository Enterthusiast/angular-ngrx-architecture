import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../../reducers/app-store.interface';

import { privateParams } from '../../../../privateparams';


@Injectable()
export class ApiPeopleService {

  private headers = new Headers({
    'Content-Type': 'application/json'
    , 'Authorization': 'Basic ' + btoa(privateParams.logins.origamiDev)
  });
  private peoplesUrl = privateParams.links.origamiPeoples;

  constructor(private store: Store<IAppStore>, private http: Http) {}

  getPeopleList(): void {
    this.http.get(this.peoplesUrl, {headers: this.headers}).subscribe(res => {
      const json = res.json();
      const peopleList = json._embedded.peoples;
      this.store.dispatch({ type: 'API_PEOPLE_GET_PEOPLE', payload: peopleList });
    });
  }

}
