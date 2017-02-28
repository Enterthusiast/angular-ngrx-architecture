export class ObjectTool {

  public static forKeysInObject(object, callback, key?) {
    if(typeof object === 'object') {
      if(key) {
        callback(object, key);
      }
      Object.keys(object)
        .map(key => this.forKeysInObject(object[key], callback, key));
    } else {
      callback(object, key);
    }
  }

  public static forKeysWithDataInObject(object, callback, key?) {
    if(typeof object === 'object') {
      Object.keys(object)
        .map(key => this.forKeysWithDataInObject(object[key], callback, key));
    } else {
      callback(object, key);
    }
  }

}
