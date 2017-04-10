import {TestBed, async, inject} from '@angular/core/testing';
import {Injectable} from '@angular/core';

import {ItemFactoryCommonService} from './item.factory.common.service';
import {TransformerCommonService} from './transformer.common.service';
import {ItemCommonService} from "./item.common.service";


// create a dummy service
@Injectable()
export class TestItemFactoryCommonService extends ItemFactoryCommonService {}

// start testing
describe('ItemFactoryCommonService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ItemCommonService,
        ItemFactoryCommonService,
        TransformerCommonService,
        TestItemFactoryCommonService
      ]
    });
  });

  it('should be able to initialise the service',
    inject([ItemFactoryCommonService], (service) => {
      expect(service).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestItemFactoryCommonService], (service) => {
      expect(service).toBeTruthy();
    }));

  it('.createList(params) should return a new list with models matching the params (list & type)',
    inject([TestItemFactoryCommonService], (service) => {

      const list = [
        { fakeKey_1: 'fakeData_1' },
        { fakeKey_1: 'fakeData_2' },
        { fakeKey_1: 'fakeData_3' },
      ];

      const paramsGet = {
        list: list,
        type: 'get'
      };
      const paramsPost = {
        list: list,
        type: 'post'
      };
      const paramsPut = {
        list: list,
        type: 'put'
      };

      spyOn(service, 'createGetItem');
      expect(service.createList(paramsGet).length).toEqual(list.length);
      spyOn(service, 'createPostItem');
      expect(service.createList(paramsPost).length).toEqual(list.length);
      spyOn(service, 'createPutItem');
      expect(service.createList(paramsPut).length).toEqual(list.length);

      expect(service.createGetItem).toHaveBeenCalledTimes(3);
      expect(service.createPostItem).toHaveBeenCalledTimes(3);
      expect(service.createPutItem).toHaveBeenCalledTimes(3);

    }));

  it('.createItem(params) should return a new model matching the params (data & type)',
    inject([TestItemFactoryCommonService], (service) => {

      let params = {
        data: {},
        type: 'get'
      };
      spyOn(service, 'createGetItem');
      service.createItem(params);

      params = {
        data: {},
        type: 'post'
      };
      spyOn(service, 'createPostItem');
      service.createItem(params);

      params = {
        data: {},
        type: 'put'
      };
      spyOn(service, 'createPutItem');
      service.createItem(params);

      expect(service.createGetItem).toHaveBeenCalledTimes(1);
      expect(service.createPostItem).toHaveBeenCalledTimes(1);
      expect(service.createPutItem).toHaveBeenCalledTimes(1);

    }));

});
