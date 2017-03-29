import {routeIDList} from '../../root/routers/config/routeId.const';
import {ItemCommonClass} from '../../common/models/item.common.class';


export class ItemPeopleClass extends ItemCommonClass {

  constructor(params) {
    super(params);
    this.itemRouteId = routeIDList.peopleItemShow;
    this.listRouteId = routeIDList.peopleList;
  }

}
