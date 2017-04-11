import {TestBed, async, inject, fakeAsync} from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreModule} from '@ngrx/store';
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import 'rxjs/add/operator/last';
import * as _ from 'lodash';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {SubjectCommonService} from './subject.common.service';
import {ManagerCommonService} from './manager.common.service';
import {ApiCommonService} from './api.common.service';
import {TransformerCommonService} from './transformer.common.service';
import {ItemCommonService} from './item.common.service';
import {ItemFactoryCommonService} from './item.factory.common.service';
import {EffectCommonService} from './effect.common.service';
import {ItemCommonClass} from '../models/item.common.class';
import {ItemCommonConfig} from '../../../configs/models/item.common.config';


// create a dummy service
const testParams = {
  storeKey: 'test'
};

@Injectable()
export class TestSubjectCommonService extends SubjectCommonService {

  constructor(protected store: Store<IRootStore>,
              protected managerService: ManagerCommonService) {
    super(store,
          managerService);
  }

  setParams() {
    this.params = testParams;
  }

}

const testEffectParams = {
  storeKey: 'test',
  reducerFunctions: {
    setList: function(list) { return {type: 'SET_LIST', payload: list}; },
    setWatchedId: function(watchedId) { return {type: 'SET_WATCHEDID', payload: watchedId}; }
  }
};

@Injectable()
export class TestEffectCommonService extends EffectCommonService {

  constructor (public store: Store<IRootStore>) {
    super(store);
  }

  setParams() {
    this.params = testEffectParams;
  }

}

// start testing
describe('SubjectCommonService', () => {

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
        TestEffectCommonService,
        ManagerCommonService,
        ItemCommonService,
        ItemFactoryCommonService,
        SubjectCommonService,
        TransformerCommonService,
        TestSubjectCommonService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });

  });

  it('should be able to initialise the service',
    inject([SubjectCommonService], (subjectCommonService) => {
      expect(subjectCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestSubjectCommonService], (testSubjectCommonService) => {
      expect(testSubjectCommonService).toBeTruthy();
    }));

  it('.createStoreObservable() should have created an Observable of the store corresponding to params.storeKey',
    inject([TestSubjectCommonService], (testSubjectCommonService) => {
      testSubjectCommonService.state$.subscribe(value => {
        expect(value.watchedId).toEqual(2);
      });
    }));

  // test removed because testing with observable is quite a mess in Angular2 right now.
  // it('.createWatchedIdSubject() should have created a Subject returning the current watchedItem',
  //   async(inject([TestSubjectCommonService, TestEffectCommonService], (testSubjectCommonService, testEffectCommonService) => {
  //     testSubjectCommonService.watchedItem$.subscribe(value => {
  //       expect(value.getId()).toEqual(20);
  //     });
  //     testEffectCommonService.updateWatchedId(20);
  //   })));


});
