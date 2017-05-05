import {Injectable} from '@angular/core';

import {Subject} from 'rxjs/Subject';

import {ObjectEffectCommonService} from './object.effect.common.service';
import {ManagerCommonService} from './manager.common.service';
import {ParamsServiceConfig} from '../../../configs/services/params.service.config';


@Injectable()
export class EmbeddedCommonService {

  embeddedObject$: Subject<any> = new Subject();

  constructor (protected objectEffectCommonService: ObjectEffectCommonService,
               protected managerCommonService: ManagerCommonService) {}

  getEmbeddedData(embeddedObject) {

    let newEmbeddedObject = {};

    if (embeddedObject) {

      Object.keys(embeddedObject).map( (key) => {
        console.log(key);

        let serviceParams;
        let listOrItem;

        // if it ends with an uuid it's an object, extract the uuid from the url and set the remaining url as the apiUrl
        if (key && key !== 'self') {

          let keyArray = key.split('');
          const lastChar = key.split('')[key.split('').length - 1];

          if (lastChar.localeCompare('s') === 0) {
            listOrItem = 'list';
            keyArray.pop();
            if ([...keyArray].splice(keyArray.length - 2, keyArray.length).join('').localeCompare('ie') === 0) {
              keyArray.splice(keyArray.length - 2, keyArray.length);
              keyArray.push('y');
            }
            serviceParams = {
              apiUrl: embeddedObject[key],
              embeddedListKey: key,
              formItemKey: keyArray.join('')
            };
          } else {
            listOrItem = 'item';
            if ([...keyArray].splice(keyArray.length - 2, keyArray.length).join('').localeCompare('ie') === 0) {
              keyArray.splice(keyArray.length - 2, keyArray.length);
              keyArray.push('y');
            }
            serviceParams = {
              apiUrl: embeddedObject[key],
              embeddedListKey: key + 's',
              formItemKey: keyArray.join('')
            };
          }

          if (ParamsServiceConfig[key]) {
            serviceParams = ParamsServiceConfig[key];
          }

          if (serviceParams) {
            const apiService = this.managerCommonService.getApiService();
            apiService.setParams({
              apiUrl: serviceParams.apiUrl,
              embeddedListKey: serviceParams.embeddedListKey,
              formItemKey: serviceParams.formItemKey,
            });
            this.managerCommonService.setApiService(apiService);

            this.managerCommonService.setEffectService(this.objectEffectCommonService);
            this.objectEffectCommonService.dataObject$.subscribe( dataObject => {
                newEmbeddedObject[key] = dataObject;
                this.embeddedObject$.next(newEmbeddedObject);
              },
              error => {
                debugger;
              },
              () => {
                debugger;
              });

            this.managerCommonService.getList();
          }

        }

      });
    }
  }

}
