import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../reducers/app-store.interface';
import { privateParams } from '../../../privateparams';
import { peopleListSetList } from '../../reducers/people/list.people.reducer';
import { peopleItemSetItem } from '../../reducers/people/item.people.reducer';
import {ItemPeopleClass} from "../../models/people/item.people.class";
import {TransformerPeopleService} from "./transformer.people.service";
import {FactoryPeopleService} from "./factory.people.service";
import {ModelCommonConfig} from "../common/model/config/model.common.config";


@Injectable()
export class ApiPeopleService {

  private headers = new Headers({
    'Content-Type': 'application/json'
    , 'Authorization': 'Basic ' + btoa(privateParams.logins.origamiDev)
  });

  private apiUrl = privateParams.links.origamiPeoples;
  private embeddedListKey = 'peoples';
  private formItemKey = 'people';
  private uuidItemKey = ModelCommonConfig.DEFAULT_UUID_KEY;

  constructor(private store: Store<IAppStore>,
              private http: Http,
              private transformerPeopleService: TransformerPeopleService,
              private itemPeopleFactoryService: FactoryPeopleService) {}

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

  getList(): void {
    this.http.get(this.getListUrl(), {headers: this.headers})
      .toPromise()
      .then(res => {
        const json = res.json();
        const peopleList = json._embedded[this.embeddedListKey];
        this.store.dispatch(peopleListSetList(peopleList));
      })
      .catch(console.log);
  }

  getItem(id): void {
    this.http.get(this.getItemUrl(id), {headers: this.headers})
      .toPromise()
      .then(res => {
        const itemPeople = this.itemPeopleFactoryService.createPeople({ data: res.json(), type: 'get' });
        this.store.dispatch(peopleItemSetItem(itemPeople));
      })
      .catch(console.log);
  }

  postItem(item): void {
    this.http.post(this.postItemUrl(), this.postItemWrapper(item), {headers: this.headers})
      .toPromise()
      .then(res => {
        const itemPeople = this.itemPeopleFactoryService.createPeople({ data: res.json(), type: 'get' });
        this.store.dispatch(peopleItemSetItem(itemPeople));
      })
      .catch(console.log);
  }

  putItem(item, id): void {
    const itemPeoplePutData = this.transformerPeopleService.toPutAttributes(item);
    this.http.put(this.putItemUrl(id), this.postItemWrapper(itemPeoplePutData), {headers: this.headers})
      .toPromise()
      .then(res => {
        const itemPeople = this.itemPeopleFactoryService.createPeople({ data: res.json(), type: 'get' });
        this.store.dispatch(peopleItemSetItem(itemPeople));
      })
      .catch(console.log);
  }

}
