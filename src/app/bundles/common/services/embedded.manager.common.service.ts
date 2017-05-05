import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {TransformerCommonService} from './transformer.common.service';
import {ItemFactoryCommonService} from './item.factory.common.service';
import {EffectCommonService} from './effect.common.service';
import {ApiCommonService} from './api.common.service';
import {ManagerCommonService} from './manager.common.service';
import {EmbeddedCommonService} from './embedded.common.service';


@Injectable()
export class EmbeddedManagerCommonService extends ManagerCommonService {

  constructor(protected apiService: ApiCommonService,
              protected transformerService: TransformerCommonService,
              protected factoryService: ItemFactoryCommonService,
              protected effectService: EffectCommonService,
              protected embeddedService: EmbeddedCommonService) {
    super(apiService, transformerService, factoryService, effectService);
  }

  getApiService() {
    return this.apiService;
  }

  setApiService(apiService) {
    if (apiService) {
      this.apiService = apiService;
    }
  }

  getEffectService() {
    return this.effectService;
  }

  setEffectService(effectService) {
    if (effectService) {
      this.effectService = effectService;
    }
  }

  getList(): void {
    const apiResponse$ = this.apiService.getList();
    const apiSubscription = apiResponse$.subscribe(response => {
      const resList = this.factoryService.createList({ list: response, type: 'get' });
      resList.map(item => {
        const embeddedSubscription = this.embeddedService.embeddedObject$.subscribe(embeddedObject => {
          debugger;
          embeddedSubscription.unsubscribe();
        });
        this.embeddedService.getEmbeddedData(item.getLinks());
      });
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
