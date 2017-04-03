import {Injectable} from '@angular/core';

import {TransformerCommonService} from './transformer.common.service';
import {ItemCommonConfig} from '../../../configs/models/item.common.config';
import {ItemCommonClass} from '../models/item.common.class';


@Injectable()
export class ItemFactoryCommonService {

  constructor(protected transformerService: TransformerCommonService) {}

  public createItem(params): ItemCommonClass {
    switch (params.type) {
      case 'get':
        return this.createGetItem(params.data);
      case 'post':
        return this.createPostItem(params.data);
      case 'put':
        return this.createPutItem(params.data);
      default:
        return new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES] : params.data });
    }
  }

  public createList(params): ItemCommonClass[] {
    const list = params.list;
    const type = params.type || 'get';
    return list.map((data) => this.createItem({ data: data, type: type }));
  }

  public createGetItem(data): ItemCommonClass {
    const attributes = this.transformerService.toGetAttributes(data);
    return new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES] : attributes });
  }

  public createPutItem(data): ItemCommonClass {
    const attributes = this.transformerService.toPutAttributes(data);
    return new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES]: attributes });
  }

  public createPostItem(data): ItemCommonClass {
    const attributes = this.transformerService.toPostAttributes(data);
    return new ItemCommonClass({ [ItemCommonConfig.ATTRIBUTES]: attributes });
  }

}
