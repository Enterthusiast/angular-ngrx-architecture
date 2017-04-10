import {TestBed, async, inject} from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreModule} from '@ngrx/store';

import * as _ from 'lodash';

import {IRootStore} from '../../root/reducers/root.store.interface';
import {EffectCommonService} from './effect.common.service';


// create a dummy service
const testParams = {
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
    this.params = testParams;
  }

}

// start testing
describe('EffectCommonService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({
          test: (state = { list: [], watchedId: '' }, action ) => {
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
        EffectCommonService,
        TestEffectCommonService
      ]
    });
  });

  it('should be able to initialise the service',
    inject([EffectCommonService], (effectCommonService) => {
      expect(effectCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestEffectCommonService], (testEffectCommonService) => {
      expect(testEffectCommonService).toBeTruthy();
    }));

  it('.setParams() should have set the service params',
    inject([TestEffectCommonService], (testEffectCommonService) => {
      Object.keys(testEffectCommonService.params).map((key) => {
        expect(testEffectCommonService.params[key]).toEqual(testParams[key]);
        expect(testEffectCommonService.params[key]).toBeTruthy();
      });
    }));

  it('.updateWatchedId(id) should set the store watchedId to the id value',
    inject([TestEffectCommonService], (testEffectCommonService) => {
      testEffectCommonService.updateWatchedId(1234);
      expect(testEffectCommonService.state.watchedId).toEqual(1234);
    }));

  it('.postOrUpdateList(list) should set or update the store list with the provided items',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 4, name: 'quatre', getId() { return this.id; } }
      ];

      const testListUp = [
        { id: 0, name: 'ZERO', getId() { return this.id; } },
        { id: 1, name: 'UN', getId() { return this.id; } },
        { id: 2, name: 'DEUX', getId() { return this.id; } },
        { id: 3, name: 'TROIS', getId() { return this.id; } }
      ];

      const testListResult = [
        { id: 0, name: 'ZERO', getId() { return this.id; } },
        { id: 1, name: 'UN', getId() { return this.id; } },
        { id: 2, name: 'DEUX', getId() { return this.id; } },
        { id: 4, name: 'quatre', getId() { return this.id; } },
        { id: 3, name: 'TROIS', getId() { return this.id; } }
      ];

      testEffectCommonService.postOrUpdateList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.postOrUpdateList(testListUp);
      testEffectCommonService.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.postList(list) should merge the store list with the given list',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      const testListUp = [
        { id: 10, name: 'ZERO', getId() { return this.id; } },
        { id: 11, name: 'UN', getId() { return this.id; } },
        { id: 12, name: 'DEUX', getId() { return this.id; } },
        { id: 13, name: 'TROIS', getId() { return this.id; } }
      ];

      const testListResult = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } },
        { id: 10, name: 'ZERO', getId() { return this.id; } },
        { id: 11, name: 'UN', getId() { return this.id; } },
        { id: 12, name: 'DEUX', getId() { return this.id; } },
        { id: 13, name: 'TROIS', getId() { return this.id; } }
      ];

      testEffectCommonService.postList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.postList(testListUp);
      testEffectCommonService.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.updateList(list) should override the store list with the given list',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      const testListUp = [
        { id: 10, name: 'ZERO', getId() { return this.id; } },
        { id: 11, name: 'UN', getId() { return this.id; } },
        { id: 12, name: 'DEUX', getId() { return this.id; } },
        { id: 13, name: 'TROIS', getId() { return this.id; } }
      ];

      testEffectCommonService.updateList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.updateList(testListUp);
      expect(testEffectCommonService.state.list).toEqual(testListUp);

    }));

  it('.updateList(list) should override the store list with the given list',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      const testListUp = [
        { id: 10, name: 'ZERO', getId() { return this.id; } },
        { id: 11, name: 'UN', getId() { return this.id; } },
        { id: 12, name: 'DEUX', getId() { return this.id; } },
        { id: 13, name: 'TROIS', getId() { return this.id; } }
      ];

      testEffectCommonService.updateList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.updateList(testListUp);
      expect(testEffectCommonService.state.list).toEqual(testListUp);

    }));

  it('.postItem(list) should add the item to the store',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      const testItemUp = { id: 10, name: 'ZERO', getId() { return this.id; } };

      const testListResult = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } },
        { id: 10, name: 'ZERO', getId() { return this.id; } }
      ];

      testEffectCommonService.postList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.postItem(testItemUp);
      testEffectCommonService.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.updateItem(list) should update the item already in the store',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      const testItemUp = { id: 1, name: 'I am one', getId() { return this.id; } };

      const testListResult = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'I am one', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } },
      ];

      testEffectCommonService.postList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.updateItem(testItemUp);
      testEffectCommonService.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.deleteItem(list) should delete the item from the store',
    inject([TestEffectCommonService], (testEffectCommonService) => {

      const testListLow = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 2, name: 'deux', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      const testListResult = [
        { id: 0, name: 'zero', getId() { return this.id; } },
        { id: 1, name: 'un', getId() { return this.id; } },
        { id: 3, name: 'trois', getId() { return this.id; } }
      ];

      testEffectCommonService.postList(testListLow);
      expect(testEffectCommonService.state.list).toEqual(testListLow);

      testEffectCommonService.deleteItem(2);
      testEffectCommonService.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

});
