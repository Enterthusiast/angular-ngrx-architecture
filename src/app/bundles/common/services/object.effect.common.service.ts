import {Injectable} from '@angular/core';

import {Subject} from 'rxjs/Subject';

import * as _ from 'lodash';
import {Observable} from "rxjs";
import {EffectCommonService} from "./effect.common.service";


@Injectable()
export class ObjectEffectCommonService extends EffectCommonService {

  dataObject$: Subject<any> = new Subject();
  protected dataObject: any = { list: [] };

  // TODO: transform the storage object to an observable
  // Make the ObjectEffectCommon service the default effect
  // then allow other service to listen to the dataObject
  // and put the data wherever they want: store, other object, local storage etc

  constructor () {
    super();
  }

  postOrUpdateList(list) {
    list.map(item => {
      if (!this.updateItem(item)) {
        this.postItem(item);
      }
    });
  }

  postList(list) {
    const newDataObject = _.assignIn({}, this.dataObject, { list: [...this.dataObject.list, ...list] });
    this.dataObject$.next(newDataObject);
  }

  updateList(list) {
    const newDataObject = _.assignIn({}, this.dataObject, { list: list });
    this.dataObject$.next(newDataObject);
  }

  postItem(item) {
    const newDataObject = _.assignIn({}, this.dataObject, { list: [...this.dataObject.list, item] });
    this.dataObject$.next(newDataObject);
  }

  updateItem(item) {
    const newDataObject = _.assignIn({}, this.dataObject, { list: [...this.dataObject.list] });
    const itemToUpdatePosition = this.dataObject.list.findIndex(listItem => listItem.getId() === item.getId());
    if ( itemToUpdatePosition !== -1) {
      this.dataObject.list[itemToUpdatePosition] = item;
      this.dataObject$.next(newDataObject);
      return true;
    } else {
      return false;
    }
  }

  deleteItem(id) {
    const newDataObject = _.assignIn({}, this.dataObject, { list: [...this.dataObject.list] });
    const itemToUpdatePosition = newDataObject.list.findIndex(listItem => listItem.getId() === id);
    if ( itemToUpdatePosition !== -1) {
      newDataObject.list = [
        ...newDataObject.list.slice(0, itemToUpdatePosition),
        ...newDataObject.list.slice(itemToUpdatePosition + 1)];
      this.dataObject$.next(newDataObject);
    }
  }

}

