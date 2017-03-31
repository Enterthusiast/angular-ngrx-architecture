import {Injectable} from '@angular/core';

import {TransformerCompanyService} from './transformer.company.service';
import {ItemCompanyClass} from '../models/item.company.class';
import {ModelCommonConfig} from '../../../configs/models/model.common.config';

@Injectable()
export class FactoryCompanyService {

  constructor(private transformerCompanyService: TransformerCompanyService) {}

  public createCompany(params): ItemCompanyClass {
    switch (params.type) {
      case 'get':
        return this.createGetCompany(params.data);
      case 'post':
        return this.createPostCompany(params.data);
      case 'put':
        return this.createPutCompany(params.data);
      default:
        return new ItemCompanyClass({ [ModelCommonConfig.ATTRIBUTES] : params.data });
    }
  }

  public createCompanyList(params): ItemCompanyClass[] {
    const list = params.list;
    const type = params.type || 'get';
    return list.map((data) => this.createCompany({ data: data, type: type }));
  }

  public createGetCompany(data): ItemCompanyClass {
    const attributes = this.transformerCompanyService.toGetAttributes(data);
    return new ItemCompanyClass({ [ModelCommonConfig.ATTRIBUTES] : attributes });
  }

  public createPutCompany(data): ItemCompanyClass {
    const attributes = this.transformerCompanyService.toPutAttributes(data);
    return new ItemCompanyClass({ [ModelCommonConfig.ATTRIBUTES]: attributes });
  }

  public createPostCompany(data): ItemCompanyClass {
    const attributes = this.transformerCompanyService.toPostAttributes(data);
    return new ItemCompanyClass({ [ModelCommonConfig.ATTRIBUTES]: attributes });
  }

}
