import {TestBed, async, inject} from '@angular/core/testing';
import {Injectable} from '@angular/core';

import {ItemCommonService} from './item.common.service';


// create a dummy service
@Injectable()
export class TestItemCommonService extends ItemCommonService {}

// start testing
describe('ItemCommonService', () => {

  let testModel;
  let testFields;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ItemCommonService,
        TestItemCommonService
      ]
    });
    testModel = {
      my_first: 1,
      my_second: 2,
      my_third: 3,
      my_forth: 4
    };
    testFields = [
      'my_second',
      'my_forth'
    ];
  });

  it('should be able to initialise the service',
    inject([ItemCommonService], (effectCommonService) => {
      expect(effectCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestItemCommonService], (testEffectCommonService) => {
      expect(testEffectCommonService).toBeTruthy();
    }));

  it('.createGetItem(model, getFields) should return a new model with only the getFields keys',
    inject([TestItemCommonService], (testEffectCommonService) => {
      const resultItem = {
        my_second: 2,
        my_forth: 4
      };
      testModel = testEffectCommonService.createGetItem(testModel, testFields);
      expect(testModel).toEqual(resultItem);
    }));

  it('.createPostIem(model, postFields) should return a new model with only the postFields keys in camelCase',
    inject([TestItemCommonService], (testEffectCommonService) => {
      const resultItem = {
        mySecond: 2,
        myForth: 4
      };
      testModel = testEffectCommonService.createPostIem(testModel, testFields);
      expect(testModel).toEqual(resultItem);
    }));

  it('.createPutItem(model, putFields) should return a new model with only the putFields keys in camelCase',
    inject([TestItemCommonService], (testEffectCommonService) => {
      const resultItem = {
        mySecond: 2,
        myForth: 4
      };
      testModel = testEffectCommonService.createPutItem(testModel, testFields);
      expect(testModel).toEqual(resultItem);
    }));

});
