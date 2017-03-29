import {routeIDList} from '../../../configs/routes/routeId.const';
import {ModelCommonClass} from '../../common/models/model.common.class';


export class ItemPeopleClass extends ModelCommonClass {

  constructor(params) {
    super(params);
    this.itemRouteId = routeIDList.peopleItemShow;
    this.listRouteId = routeIDList.peopleList;
  }

}
