import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {TransformerCompanyService} from './transformer.company.service';
import {FactoryCompanyService} from './factory.company.service';
import {EffectCompanyService} from './effect.company.service';
import {ApiCompanyService} from './api.company.service';


@Injectable()
export class ManagerCompanyService {

  constructor(private apiService: ApiCompanyService,
              private transformerService: TransformerCompanyService,
              private factoryService: FactoryCompanyService,
              private effectService: EffectCompanyService) {}

  getList(): void {
    const apiResponse$ = this.apiService.getList();
    const apiSubscription = apiResponse$.subscribe(response => {
      const resList = this.factoryService.createCompanyList({ list: response, type: 'get' });
      this.effectService.companyPostOrUpdateList(resList);
      apiSubscription.unsubscribe();
    });
  }

  getItem(id): void {
    const apiResponse$ = this.apiService.getItem(id);
    const apiSubscription = apiResponse$.subscribe(response => {
      const resItem = this.factoryService.createCompany({ data: response, type: 'get' });
      this.effectService.companyPostItem(resItem);
      apiSubscription.unsubscribe();
    });
  }

  postItem(item): void {
    const apiResponse$ = this.apiService.postItem(item);
    const apiSubscription = apiResponse$.subscribe(response => {
      const resItem = this.factoryService.createCompany({ data: response, type: 'get' });
      this.effectService.companyPostItem(resItem);
      apiSubscription.unsubscribe();
    });
  }

  putItem(item, id): void {
    const putItem = this.transformerService.toPutAttributes(item);
    const apiResponse$ = this.apiService.putItem(putItem, id);
    const apiSubscription = apiResponse$.subscribe(response => {
      const resItem = this.factoryService.createCompany({ data: response, type: 'get' });
      this.effectService.companyUpdateItem(resItem);
      apiSubscription.unsubscribe();
    });
  }

  deleteItem(id): void {
    const apiResponse$ = this.apiService.deleteItem(id);
    const apiSubscription = apiResponse$.subscribe(response => {
      this.effectService.companyDeleteItem(id);
      apiSubscription.unsubscribe();
    });
  }

  updateWatchedId(watchedId): void {
    this.effectService.companyUpdateWatchedId(watchedId);
  }

}
