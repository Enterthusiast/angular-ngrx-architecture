import {Injectable} from '@angular/core';

import {TransformerCommonService} from '../../../common/services/transformer.common.service';
import {GetItemJobPeopleFields} from './fields/get.item.job.people.fields';
import {PostItemJobPeopleFields} from './fields/post.item.job.people.fields';
import {PutItemJobPeopleFields} from './fields/put.item.job.people.fields';
import {ItemJobPeopleService} from './item.job.people.service';


@Injectable()
export class TransformerJobPeopleService extends TransformerCommonService {

  constructor(public itemService: ItemJobPeopleService) {
    super(itemService);
  }

  setParams() {
    this.params = {
      getItemFields: GetItemJobPeopleFields,
        postItemFields: PostItemJobPeopleFields,
        putItemFields: PutItemJobPeopleFields
    };
  }

}
