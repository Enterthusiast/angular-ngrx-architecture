import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Store } from '@ngrx/store';

import { IAppStore } from '../../reducers/app-store.interface';
import { privateParams } from '../../../privateparams';
import {peopleSetList, peopleAddItem} from '../../reducers/people/list.people.reducer';
import {ItemPeopleClass} from "../../models/people/item.people.class";
import {TransformerPeopleService} from "./transformer.people.service";
import {FactoryPeopleService} from "./factory.people.service";
import {ModelCommonConfig} from "../common/model/config/model.common.config";
import {SubjectPeopleService} from "./subject.people.service";
import {EffectPeopleService} from "./effect.people.service";


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

  getList(): void {
    this.http.get(this.getListUrl(), {headers: this.headers})
      .toPromise()
      .then(res => {
        const json = res.json();
        const peopleListData = json._embedded[this.embeddedListKey];
        const peopleList = this.itemPeopleFactoryService.createPeopleList({ list: peopleListData, type: 'get' });
        this.store.dispatch(peopleSetList(peopleList));
      })
      .catch(console.log);
  }

  getItem(id): void {
    this.http.get(this.getItemUrl(id), {headers: this.headers})
      .toPromise()
      .then(res => {
        const itemPeople = this.itemPeopleFactoryService.createPeople({ data: res.json(), type: 'get' });
        this.store.dispatch(peopleAddItem(itemPeople));
      })
      .catch(console.log);
  }

  postItem(item): void {
    this.http.post(this.postItemUrl(), this.postItemWrapper(item), {headers: this.headers})
      .toPromise()
      .then(res => {
        const itemPeople = this.itemPeopleFactoryService.createPeople({ data: res.json(), type: 'get' });
        this.store.dispatch(peopleAddItem(itemPeople));
      })
      .catch(console.log);
  }

  putItem(item, id): void {
    const itemPeoplePutData = this.transformerPeopleService.toPutAttributes(item);
    this.putObject(itemPeoplePutData, id);
  }

  putObject(object, id): void {
    this.http.put(this.putItemUrl(id), this.postItemWrapper(object), {headers: this.headers})
      .toPromise()
      .then(res => {
        const itemPeople = this.itemPeopleFactoryService.createPeople({ data: res.json(), type: 'get' });
        this.effectPeopleService.peopleUpdateItem(itemPeople);
      })
      .catch(console.log);
  }

}
