import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { IAppStore } from '../../reducers/app-store.interface';
import { privateParams } from '../../../privateparams';
import {TransformerPeopleService} from './transformer.people.service';
import {FactoryPeopleService} from './factory.people.service';
import {ModelCommonConfig} from '../common/model/config/model.common.config';
import {EffectPeopleService} from './effect.people.service';


@Injectable()
export class ApiPeopleService {

  private headers = new Headers({
    'Content-Type': 'application/json'
    , 'Authorization': 'Basic ' + btoa(privateParams.logins.origamiDev)
  });

  private apiUrl = privateParams.links.origamiPeoples;
  private embeddedListKey = 'peoples';
  private formItemKey = 'people';
  private uuidItemKey = ModelCommonConfig.DEFAULT_ID_KEY;

  constructor(private store: Store<IAppStore>,
              private http: Http,
              private transformerPeopleService: TransformerPeopleService,
              private itemPeopleFactoryService: FactoryPeopleService,
              private effectPeopleService: EffectPeopleService) {}

  private getListUrl(): string {
    return this.apiUrl;
  }

  private getItemUrl(id) {
    return `${this.apiUrl}/${id}`;
  }

  private postItemUrl() {
    return this.apiUrl;
  }

  private putItemUrl(id) {
    return `${this.apiUrl}/${id}`;
  }

  private postItemWrapper(attributes) {
    return {
      [this.formItemKey]: attributes
    };
  }

  getList(): Observable<any> {
    const response$ = new Subject();
    this.http.get(this.getListUrl(), {headers: this.headers})
      .toPromise()
      .then(res => {
        const json = res.json();
        const peopleListJson = json._embedded[this.embeddedListKey];
        response$.next(peopleListJson);
      })
      .catch(console.log);
    return response$;
  }

  getItem(id): Observable<any> {
    const response$ = new Subject();
    this.http.get(this.getItemUrl(id), {headers: this.headers})
      .toPromise()
      .then(res => {
        response$.next(res.json());
      })
      .catch(console.log);
    return response$;
  }

  postItem(item): Observable<any> {
    const response$ = new Subject();
    this.http.post(this.postItemUrl(), this.postItemWrapper(item), {headers: this.headers})
      .toPromise()
      .then(res => {
        response$.next(res.json());
      })
      .catch(console.log);
    return response$;
  }

  putItem(item, id): Observable<any> {
    const response$ = new Subject();
    this.http.put(this.putItemUrl(id), this.postItemWrapper(item), {headers: this.headers})
      .toPromise()
      .then(res => {
        response$.next(res.json());
      })
      .catch(console.log);
    return response$;
  }

}
