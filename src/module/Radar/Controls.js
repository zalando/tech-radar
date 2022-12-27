import Module from "../../Module";

export default class extends Module {
  constructor(radar) {
    super();
    this.label = 'CONTROLS';
    this.radar = radar;

    // the hash field number, splitted by /
    this.id = false;
    this.version = false;

    this.idField = 0;
    this.versionField = 1;

    // this is not used. the hash will be rewritten
    window.addEventListener(onhashchange, (e) => this.getHash(e));
    this.getHash();
  }

  draw() {

  }

  getHash() {
    this.hash = window.location.hash;
  }

  parseHash() {
    const s = this.hash.split('/');
    // raw data, not checked
    // here before radarIndex
    this.id = s[this.idField].replace(/#/, '');
    this.version = s[this.versionField];
  }

  setHash(id, version) {
    history.pushState(null, null, `#${id}/${version}`);
  }

  get hash() {
    return this._hash;
  }

  set hash(val) {
    this._hash = val;
    this.parseHash();
  }

  get id() {
    return this._id;
  }

  set id(val) {
    this._id = val;
  }

  get version() {
    return this._version;
  }

  set version(val) {
    this._version = val;
  }
}
