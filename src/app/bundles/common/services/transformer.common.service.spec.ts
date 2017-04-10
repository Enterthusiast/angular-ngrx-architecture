import {TestBed, async, inject} from '@angular/core/testing';
import {Injectable} from '@angular/core';

import {ItemCommonService} from './item.common.service';
import {TransformerCommonService} from './transformer.common.service';


// create a dummy service
const testParams = {
  getItemFields: [
    'fakeKey_1',
    'fakeKey_2'
  ],
  postItemFields: [
    'fakeKey_2',
    'fakeKey_3'
  ],
  putItemFields: [
    'fakeKey_1',
    'fakeKey_3'
  ]
};

@Injectable()
export class TestTransformerCommonService extends TransformerCommonService {

  constructor(protected itemService: ItemCommonService) {
    super(itemService);
  }

  setParams() {
    this.params = testParams;
  }

}

// start testing
describe('TransformerCommonService', () => {

  let testModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TransformerCommonService,
        TestTransformerCommonService,
        ItemCommonService
      ]
    });
    testModel = {
      fakeKey_1: 'fakeData_1',
      fakeKey_2: 'fakeData_2',
      fakeKey_3: 'fakeData_3'
    };
  });

  it('should be able to initialise the service',
    inject([TransformerCommonService], (transformerCommonService) => {
      expect(transformerCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestTransformerCommonService], (testTransformerCommonService) => {
      expect(testTransformerCommonService).toBeTruthy();
    }));

});
