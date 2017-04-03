import {Injectable} from '@angular/core';

import {TransformerCommonService} from '../../../common/services/transformer.common.service';
import {GetItemPeopleFields} from './fields/get.item.people.fields';
import {PostItemPeopleFields} from './fields/post.item.people.fields';
import {PutItemPeopleFields} from './fields/put.item.people.fields';
import {ItemPeopleService} from './item.people.service';


@Injectable()
export class TransformerPeopleService extends TransformerCommonService {

  constructor(public itemService: ItemPeopleService) {
    super(itemService);
  }

  setParams() {
    this.params = {
      getItemFields: GetItemPeopleFields,
        postItemFields: PostItemPeopleFields,
        putItemFields: PutItemPeopleFields
    };
  }

}
