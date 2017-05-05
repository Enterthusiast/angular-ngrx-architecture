import {Component, HostBinding, Input} from '@angular/core';

import {ItemPeopleClass} from '../models/item.people.class';
import {WatchedItemDataPeopleDirective} from '../adapters/watched.item.data.people.directive';

import {managerCommonServiceProvider} from "../../../common/services/manager.common.service.provider";
import {ApiJobPeopleService} from "../../job/services/api.job.people.service";
import {TransformerJobPeopleService} from "../../job/services/transformer.job.people.service";
import {FactoryJobPeopleService} from "../../job/services/factory.job.people.service";
import {ObjectEffectCommonService} from "../../../common/services/object.effect.common.service";


@Component({
  selector: 'ori-item-people',
  template: `
    <div ori-watched-item-data-people (dataEmitter)="peopleItem=$event"></div>
    <div>{{ peopleItem?.attributes?.firstname }}</div>
    <div>{{ peopleItem?.attributes?.lastname }}</div>
  `,
  styles: [],
  providers: [managerCommonServiceProvider]
})
export class ItemPeopleComponent {
  peopleItem: ItemPeopleClass;

  constructor(apiService: ApiJobPeopleService,
              transformerService: TransformerJobPeopleService,
              factoryService: FactoryJobPeopleService,
              effectService: ObjectEffectCommonService) {

    let managerJobPeopleService = managerCommonServiceProvider.useFactory(apiService, transformerService, factoryService, effectService);

    effectService.dataObject$.subscribe(dataObject => {
      debugger;
    });
    managerJobPeopleService.getList();

  }

}
