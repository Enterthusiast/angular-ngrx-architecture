import {segmentConfig} from '../../../configs/routes/segment.config';
import {ModelCommonClass} from '../../common/models/model.common.class';


export class ItemPeopleClass extends ModelCommonClass {

  constructor(params) {
    super(params);
    this.itemRouteId = segmentConfig.peopleItemShow;
    this.listRouteId = segmentConfig.peopleList;
  }

}
