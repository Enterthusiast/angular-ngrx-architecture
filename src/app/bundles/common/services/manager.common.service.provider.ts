import {ManagerCommonService} from "./manager.common.service";
import {ApiCommonService} from "./api.common.service";
import {TransformerCommonService} from "./transformer.common.service";
import {ItemFactoryCommonService} from "./item.factory.common.service";
import {EffectCommonService} from "./effect.common.service";

let managerCommonServiceFactory = (apiService: ApiCommonService,
                                   transformerService: TransformerCommonService,
                                   factoryService: ItemFactoryCommonService,
                                   effectService: EffectCommonService) => {
  return new ManagerCommonService(apiService,
                                  transformerService,
                                  factoryService,
                                  effectService);
};

export let managerCommonServiceProvider = {
  provide: ManagerCommonService,
  useFactory: managerCommonServiceFactory,
  deps: [
    ApiCommonService,
    TransformerCommonService,
    ItemFactoryCommonService,
    EffectCommonService
  ]
};
