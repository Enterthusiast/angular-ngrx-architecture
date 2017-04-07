import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import {privateParams} from '../../../../privateparams';


@Injectable()
export class ApiCommonService {

  private headers = new Headers({
    'Content-Type': 'application/json'
    , 'Authorization': 'Basic ' + btoa(privateParams.logins.origamiDev)
  });

  protected params = {
    apiUrl: '',
    embeddedListKey: '',
    formItemKey: ''
  };

  constructor(protected http: Http) {
    this.setParams();
    if (!!this.params === false ||
      !!this.params.apiUrl === false ||
      !!this.params.embeddedListKey === false ||
      !!this.params.formItemKey === false) {
      console.error('ApiCommonService params are not set correctly');
    }
  }

  protected setParams() {}

  private getListUrl(): string {
    return this.params.apiUrl;
  }

  private getItemUrl(id) {
    return `${this.params.apiUrl}/${id}`;
  }

  private postItemUrl() {
    return this.params.apiUrl;
  }

  private putItemUrl(id) {
    return `${this.params.apiUrl}/${id}`;
  }

  private postItemWrapper(attributes) {
    return {
      [this.params.formItemKey]: attributes
    };
  }

  getList(): Observable<any> {
    const response$ = new Subject();
    this.http.get(this.getListUrl(), {headers: this.headers})
      .toPromise()
      .then(res => {
        const json = res.json();
        const listJson = json && json._embedded && json._embedded[this.params.embeddedListKey];
        response$.next(listJson);
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

  deleteItem(id): Observable<any> {
    const response$ = new Subject();
    this.http.delete(this.putItemUrl(id), {headers: this.headers})
      .toPromise()
      .then(res => {
        response$.next(true);
      })
      .catch(console.log);
    return response$;
  }

}
