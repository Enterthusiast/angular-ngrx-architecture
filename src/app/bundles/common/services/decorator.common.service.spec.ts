import {TestBed, async, inject} from '@angular/core/testing';
import {Injectable} from '@angular/core';

import {DecoratorCommonService} from './decorator.common.service';
import {ItemCommonService} from './item.common.service';


// create a dummy service
@Injectable()
export class TestDecoratorCommonService extends DecoratorCommonService {

  constructor(protected itemService: ItemCommonService) {
    super(itemService);
  }

}

// start testing
describe('DecoratorCommonService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DecoratorCommonService,
        TestDecoratorCommonService,
        ItemCommonService
      ]
    });
  });

  it('should be able to initialise the service',
    inject([DecoratorCommonService], (decoratorCommonService) => {
      expect(decoratorCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestDecoratorCommonService], (testDecoratorCommonService) => {
      expect(testDecoratorCommonService).toBeTruthy();
    }));

});
