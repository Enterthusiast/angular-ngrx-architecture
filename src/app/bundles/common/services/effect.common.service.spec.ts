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
    inject([EffectCommonService], (service) => {
      expect(service).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestEffectCommonService], (service) => {
      expect(service).toBeTruthy();
    }));

  it('.setParams() should have set the service params',
    inject([TestEffectCommonService], (service) => {
      Object.keys(service.params).map((key) => {
        expect(service.params[key]).toEqual(testParams[key]);
        expect(service.params[key]).toBeTruthy();
      });
    }));

  it('.updateWatchedId(id) should set the store watchedId to the id value',
    inject([TestEffectCommonService], (service) => {
      service.updateWatchedId(1234);
      expect(service.state.watchedId).toEqual(1234);
    }));

  it('.postOrUpdateList(list) should set or update the store list with the provided items',
    inject([TestEffectCommonService], (service) => {

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

      service.postOrUpdateList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.postOrUpdateList(testListUp);
      service.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.postList(list) should merge the store list with the given list',
    inject([TestEffectCommonService], (service) => {

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

      service.postList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.postList(testListUp);
      service.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.updateList(list) should override the store list with the given list',
    inject([TestEffectCommonService], (service) => {

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

      service.updateList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.updateList(testListUp);
      expect(service.state.list).toEqual(testListUp);

    }));

  it('.updateList(list) should override the store list with the given list',
    inject([TestEffectCommonService], (service) => {

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

      service.updateList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.updateList(testListUp);
      expect(service.state.list).toEqual(testListUp);

    }));

  it('.postItem(list) should add the item to the store',
    inject([TestEffectCommonService], (service) => {

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

      service.postList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.postItem(testItemUp);
      service.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.updateItem(list) should update the item already in the store',
    inject([TestEffectCommonService], (service) => {

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

      service.postList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.updateItem(testItemUp);
      service.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

  it('.deleteItem(list) should delete the item from the store',
    inject([TestEffectCommonService], (service) => {

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

      service.postList(testListLow);
      expect(service.state.list).toEqual(testListLow);

      service.deleteItem(2);
      service.state.list.map((item, index) => {
        expect(item.id).toEqual(testListResult[index].id);
        expect(item.name).toEqual(testListResult[index].name);
      });

    }));

});
