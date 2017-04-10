import {TestBed, async, inject} from '@angular/core/testing';
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';

import {Injectable} from '@angular/core';
import {MockBackend} from '@angular/http/testing';

import {ApiCommonService} from './api.common.service';

// create a dummy service
const testParams = {
  apiUrl: 'test.com',
  embeddedListKey: 'test-list',
  formItemKey: 'test'
};
@Injectable()
class TestApiCommonService extends ApiCommonService {
  constructor(public http: Http) {
    super(http);
  }
  protected setParams() {
    this.params = testParams;
  }
}

// start testing
describe('ApiCommonService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiCommonService,
        TestApiCommonService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be able to initialise the service',
    inject([ApiCommonService], (apiCommonService) => {
      expect(apiCommonService).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestApiCommonService], (testApiCommonService) => {
      expect(testApiCommonService).toBeTruthy();
    }));

  it('.setParams() should have set the service params',
    inject([TestApiCommonService], (testApiCommonService) => {
      Object.keys(testApiCommonService.params).map((key) => {
        expect(testApiCommonService.params[key]).toEqual(testParams[key]);
        expect(testApiCommonService.params[key]).toBeTruthy();
      });
    }));

  it('.getListUrl() should return a get a list Url',
    inject([TestApiCommonService], (testApiCommonService) => {
      expect(testApiCommonService.getListUrl()).toEqual(testParams.apiUrl);
      expect(testApiCommonService.getListUrl()).not.toBeFalsy();
    }));

  it('.getItemUrl() should return a get an item Url',
    inject([TestApiCommonService], (testApiCommonService) => {
      expect(testApiCommonService.getItemUrl(1234)).toEqual(`${testParams.apiUrl}/1234`);
      expect(testApiCommonService.getItemUrl(1234)).not.toEqual('/1234');
    }));

  it('.postItemUrl() should return a post an item Url',
    inject([TestApiCommonService], (testApiCommonService) => {
      expect(testApiCommonService.postItemUrl()).toEqual(testParams.apiUrl);
      expect(testApiCommonService.postItemUrl()).toBeTruthy();
    }));

  it('.putItemUrl() should return a put an item Url',
    inject([TestApiCommonService], (testApiCommonService) => {
      expect(testApiCommonService.putItemUrl(1234)).toEqual(`${testParams.apiUrl}/1234`);
      expect(testApiCommonService.putItemUrl(1234)).not.toEqual('/1234');
    }));

  it('.postItemWrapper() should return a wrapped item',
    inject([TestApiCommonService], (testApiCommonService) => {

      const mockObject = {
        firstname: 'John',
        lastname: 'Doe'
      };

      const wrapKey = testParams.formItemKey;

      const mockWrappedObject = {
        [wrapKey]: {
          firstname: 'John',
          lastname: 'Doe'
        }
      };

      expect(testApiCommonService.postItemWrapper(mockObject)).toEqual(mockWrappedObject);
      expect(testApiCommonService.postItemUrl()).toBeTruthy();
    }));

  it('.getList() should return a json list of item',
    async(inject([TestApiCommonService, XHRBackend], (testApiCommonService, mockBackend) => {

      const mockData = [
        '1',
        '2',
        '3'
      ];

      const embeddedListKey = testParams.embeddedListKey;

      const mockResponse = {
        _embedded: {
          [embeddedListKey]: mockData
        }
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      testApiCommonService.getList().subscribe((json) => {
        expect(json && json.length).toEqual(mockData.length);
        if (Array.isArray(json)) {
          json.map((data, index) => {
            expect(data).toEqual(mockData[index]);
          });
        }
      });

    })));

  it('.getItem(id) should return a json of the chosen item',
    async(inject([TestApiCommonService, XHRBackend], (testApiCommonService, mockBackend) => {

      const mockResponse = {
        firstname: 'John',
        lastname: 'Doe'
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      testApiCommonService.getItem(1234).subscribe((json) => {
        expect(json).toBeDefined();
        Object.keys(json).map((key) => {
          expect(json[key]).toEqual(mockResponse[key]);
          expect(json[key]).toBeTruthy();
        });
      });

    })));

  it('.postItem(item) should return a json of the post item',
    async(inject([TestApiCommonService, XHRBackend], (testApiCommonService, mockBackend) => {

      const mockObject = {
        firstname: 'John',
        lastname: 'Doe'
      };

      const mockResponse = mockObject;

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      testApiCommonService.postItem(mockObject).subscribe((json) => {
        expect(json).toBeDefined();
        Object.keys(json).map((key) => {
          expect(json[key]).toEqual(mockResponse[key]);
          expect(json[key]).toBeTruthy();
        });
      });

    })));

  it('.putItem(item) should return a json of the put item',
    async(inject([TestApiCommonService, XHRBackend], (testApiCommonService, mockBackend) => {

      const mockObject = {
        firstname: 'John',
        lastname: 'Doe'
      };

      const mockResponse = mockObject;

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      testApiCommonService.putItem(mockObject).subscribe((json) => {
        expect(json).toBeDefined();
        Object.keys(json).map((key) => {
          expect(json[key]).toEqual(mockResponse[key]);
          expect(json[key]).toBeTruthy();
        });
      });

    })));

  it('.deleteItem(id) should return true when done',
    async(inject([TestApiCommonService, XHRBackend], (testApiCommonService, mockBackend) => {

      const mockResponse = true;

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      testApiCommonService.deleteItem(1234).subscribe((json) => {
        expect(json).toBe(true);
      });

    })));

});
