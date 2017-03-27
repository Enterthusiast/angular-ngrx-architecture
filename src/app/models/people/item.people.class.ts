import {routeIDList} from '../../routers/config/routeId.const';
import {ItemCommonClass} from '../common/item.common.class';


export class ItemPeopleClass extends ItemCommonClass {

  constructor(params) {

    super(params);

    this.itemRouteId = routeIDList.peopleItemShow;
    this.listRouteId = routeIDList.peopleList;

  }

}
