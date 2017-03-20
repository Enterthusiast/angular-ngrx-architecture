import {Injectable} from '@angular/core';
import {TransformerPeopleService} from './transformer.people.service';
import {ItemPeopleClass} from '../../models/people/item.people.class';
import {ModelCommonConfig} from "../common/model/config/model.common.config";

@Injectable()
export class FactoryPeopleService {

  constructor(private transformerPeopleService: TransformerPeopleService) {}

  public createPeople(params): ItemPeopleClass {
    switch (params.type) {
      case 'get':
        return this.createGetPeople(params.data);
      case 'post':
        return this.createPostPeople(params.data);
      case 'put':
        return this.createPutPeople(params.data);
      default:
        return new ItemPeopleClass({ [ModelCommonConfig.ATTRIBUTES] : params.data });
    }
  }

  public createPeopleList(params): ItemPeopleClass[] {
    const list = params.list;
    const type = params.type || 'get';
    return list.map((data) => this.createPeople({ data: data, type: type }));
  }

  public createGetPeople(data): ItemPeopleClass {
    const attributes = this.transformerPeopleService.toGetAttributes(data);
    return new ItemPeopleClass({ [ModelCommonConfig.ATTRIBUTES] : attributes });
  }

  public createPutPeople(data): ItemPeopleClass {
    const attributes = this.transformerPeopleService.toPutAttributes(data);
    return new ItemPeopleClass({ [ModelCommonConfig.ATTRIBUTES]: attributes });
  }

  public createPostPeople(data): ItemPeopleClass {
    const attributes = this.transformerPeopleService.toPostAttributes(data);
    return new ItemPeopleClass({ [ModelCommonConfig.ATTRIBUTES]: attributes });
  }

}
