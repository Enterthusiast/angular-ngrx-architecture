import {TestBed, async, inject} from '@angular/core/testing';
import {Http, HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {Injectable} from '@angular/core';
import {MockBackend} from '@angular/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {StoreModule} from '@ngrx/store';

import {ApiCommonService} from './api.common.service';


// create a dummy service
const testParams = {
  apiUrl: 'test.com',
  embeddedListKey: 'test-list',
  formItemKey: 'test'
};
@Injectable()
class TestApiCommonService extends ApiCommonService {
  constructor(protected http: Http) {
    super(http);
  }
  setParams() {
    this.params = testParams;
  }
}

// start testing
describe('ApiCommonService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        StoreModule.provideStore({})
      ],
      providers: [
        ApiCommonService,
        TestApiCommonService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be able to initialise the service',
    inject([ApiCommonService], (service) => {
      expect(service).toBeTruthy();
    }));

  it('should be able to initialize a children service class',
    inject([TestApiCommonService], (service) => {
      expect(service).toBeTruthy();
    }));

  it('.setParams() should have set the service params',
    inject([TestApiCommonService], (service) => {
      Object.keys(service.params).map((key) => {
        expect(service.params[key]).toEqual(testParams[key]);
        expect(service.params[key]).toBeTruthy();
      });
    }));

  it('.getListUrl() should return a get a list Url',
    inject([TestApiCommonService], (service) => {
      expect(service.getListUrl()).toEqual(testParams.apiUrl);
      expect(service.getListUrl()).not.toBeFalsy();
    }));

  it('.getItemUrl() should return a get an item Url',
    inject([TestApiCommonService], (service) => {
      expect(service.getItemUrl(1234)).toEqual(`${testParams.apiUrl}/1234`);
      expect(service.getItemUrl(1234)).not.toEqual('/1234');
    }));

  it('.postItemUrl() should return a post an item Url',
    inject([TestApiCommonService], (service) => {
      expect(service.postItemUrl()).toEqual(testParams.apiUrl);
      expect(service.postItemUrl()).toBeTruthy();
    }));

  it('.putItemUrl() should return a put an item Url',
    inject([TestApiCommonService], (service) => {
      expect(service.putItemUrl(1234)).toEqual(`${testParams.apiUrl}/1234`);
      expect(service.putItemUrl(1234)).not.toEqual('/1234');
    }));

  it('.postItemWrapper() should return a wrapped item',
    inject([TestApiCommonService], (service) => {

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

      expect(service.postItemWrapper(mockObject)).toEqual(mockWrappedObject);
      expect(service.postItemUrl()).toBeTruthy();
    }));

  it('.getList() should return a json list of item',
    async(inject([TestApiCommonService, XHRBackend], (service, mockBackend) => {

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

      service.getList().subscribe((json) => {
        expect(json && json.length).toEqual(mockData.length);
        if (Array.isArray(json)) {
          json.map((data, index) => {
            expect(data).toEqual(mockData[index]);
          });
        }
      });

    })));

  it('.getItem(id) should return a json of the chosen item',
    async(inject([TestApiCommonService, XHRBackend], (service, mockBackend) => {

      const mockResponse = {
        firstname: 'John',
        lastname: 'Doe'
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.getItem(1234).subscribe((json) => {
        expect(json).toBeDefined();
        Object.keys(json).map((key) => {
          expect(json[key]).toEqual(mockResponse[key]);
          expect(json[key]).toBeTruthy();
        });
      });

    })));

  it('.postItem(item) should return a json of the post item',
    async(inject([TestApiCommonService, XHRBackend], (service, mockBackend) => {

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

      service.postItem(mockObject).subscribe((json) => {
        expect(json).toBeDefined();
        Object.keys(json).map((key) => {
          expect(json[key]).toEqual(mockResponse[key]);
          expect(json[key]).toBeTruthy();
        });
      });

    })));

  it('.putItem(item) should return a json of the put item',
    async(inject([TestApiCommonService, XHRBackend], (service, mockBackend) => {

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

      service.putItem(mockObject).subscribe((json) => {
        expect(json).toBeDefined();
        Object.keys(json).map((key) => {
          expect(json[key]).toEqual(mockResponse[key]);
          expect(json[key]).toBeTruthy();
        });
      });

    })));

  it('.deleteItem(id) should return true when done',
    async(inject([TestApiCommonService, XHRBackend], (service, mockBackend) => {

      const mockResponse = true;

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.deleteItem(1234).subscribe((json) => {
        expect(json).toBe(true);
      });

    })));

});
