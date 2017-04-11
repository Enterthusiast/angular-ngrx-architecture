import {TestBed, inject} from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import 'rxjs/add/operator/last';
import * as _ from 'lodash';

import {SubjectCommonService} from './subject.common.service';
import {ManagerCommonService} from './manager.common.service';
import {ApiCommonService} from './api.common.service';
import {TransformerCommonService} from './transformer.common.service';
import {ItemCommonService} from './item.common.service';
import {ItemFactoryCommonService} from './item.factory.common.service';
import {EffectCommonService} from './effect.common.service';
import {ItemCommonClass} from '../models/item.common.class';
import {ItemCommonConfig} from '../../../configs/models/item.common.config';


// create dummy services
@Injectable()
export class TestManagerCommonService extends ManagerCommonService {

  constructor(protected apiService: ApiCommonService,
              protected transformerService: TransformerCommonService,
              protected factoryService: ItemFactoryCommonService,
              protected effectService: EffectCommonService) {
    super(apiService,
          transformerService,
          factoryService,
          effectService);
  }

}

// start testing
describe('ManagerCommonService', () => {

  const storeList = [
    new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES] : { uuid: 1, name: 'John'} }),
    new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES] : { uuid: 2, name: 'Jane'} }),
    new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES] : { uuid: 3, name: 'Taekwon'} })
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        StoreModule.provideStore({
          test: (state = { list: storeList, watchedId: 2 }, action ) => {
            switch (action.type) {
              case 'SET_LIST':
                return _.assignIn({}, state, { list: action.payload });
              case 'SET_WATCHEDID':
                return _.assignIn({}, state, { watchedId: action.payload });
              default:
                return state;
            }
          }
        })
      ],
      providers: [
        ApiCommonService,
        EffectCommonService,
        ManagerCommonService,
        ItemCommonService,
        ItemFactoryCommonService,
        ManagerCommonService,
        SubjectCommonService,
        TransformerCommonService,
        TestManagerCommonService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });

  });

  it('should be able to initialise the service',
    inject([ManagerCommonService], (subjectCommonService) => {
      expect(subjectCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestManagerCommonService], (testManagerCommonService) => {
      expect(testManagerCommonService).toBeTruthy();
    }));

});
