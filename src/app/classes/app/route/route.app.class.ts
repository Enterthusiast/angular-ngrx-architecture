export class RouteAppClass {

  constructor(
    private _name: string
    , private _link: string
  ) {}

  get name() {
    return this._name;
  }

  // set name(value) {
  //   this._name = value;
  // }

  get link() {
    return this._link;
  }

  // set link(value) {
  //   this._link = value;
  // }

}
