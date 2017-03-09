export class ObjectTool {

  public static forKeysInObject(object, callback, key?) {
    if (typeof object === 'object') {
      if (key) {
        callback(object, key);
      }
      Object.keys(object)
        .map(objectKey => this.forKeysInObject(object[objectKey], callback, objectKey));
    } else {
      callback(object, key);
    }
  }

  public static forKeysWithDataInObject(object, callback, key?) {
    if (typeof object === 'object') {
      Object.keys(object)
        .map(objectKey => this.forKeysWithDataInObject(object[objectKey], callback, objectKey));
    } else {
      callback(object, key);
    }
  }

}
