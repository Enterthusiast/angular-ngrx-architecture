import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {TransformerCommonService} from './transformer.common.service';
import {ItemFactoryCommonService} from './item.factory.common.service';
import {EffectCommonService} from './effect.common.service';
import {ApiCommonService} from './api.common.service';


@Injectable()
export class ManagerCommonService {

  constructor(protected apiService: ApiCommonService,
              protected transformerService: TransformerCommonService,
              protected factoryService: ItemFactoryCommonService,
              protected effectService: EffectCommonService) {}

  getList(): void {
    const apiResponse$ = this.apiService.getList();
    const apiSubscription = apiResponse$.subscribe(response => {
      const resList = this.factoryService.createList({ list: response, type: 'get' });
      this.effectService.postOrUpdateList(resList);
      apiSubscription.unsubscribe();
    });
  }

  getItem(id): void {
    const apiResponse$ = this.apiService.getItem(id);
    const apiSubscription = apiResponse$.subscribe(response => {
      const resItem = this.factoryService.createItem({ data: response, type: 'get' });
      this.effectService.postItem(resItem);
      apiSubscription.unsubscribe();
    });
  }

  postItem(item): void {
    const apiResponse$ = this.apiService.postItem(item);
    const apiSubscription = apiResponse$.subscribe(response => {
      const resItem = this.factoryService.createItem({ data: response, type: 'get' });
      this.effectService.postItem(resItem);
      apiSubscription.unsubscribe();
    });
  }

  putItem(item, id): void {
    const putItem = this.transformerService.toPutAttributes(item);
    const apiResponse$ = this.apiService.putItem(putItem, id);
    const apiSubscription = apiResponse$.subscribe(response => {
      const resItem = this.factoryService.createItem({ data: response, type: 'get' });
      this.effectService.updateItem(resItem);
      apiSubscription.unsubscribe();
    });
  }

  deleteItem(id): void {
    const apiResponse$ = this.apiService.deleteItem(id);
    const apiSubscription = apiResponse$.subscribe(response => {
      this.updateWatchedId('');
      this.effectService.deleteItem(id);
      apiSubscription.unsubscribe();
    });
  }

  updateWatchedId(watchedId): void {
    this.effectService.updateWatchedId(watchedId);
  }

}
