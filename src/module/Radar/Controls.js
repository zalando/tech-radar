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

    getHash(e) {
        if (e)
            console.log('>>>', e);

        this.hash = window.location.hash;
    }

    parseHash() {
        const s = this.hash.split('/');
        // @TODO customizable per data index : field number 0 and 1
        // raw data, not checked
        // here before radarIndex
        this.id = s[this.idField].replace(/#/, '');
        this.version = s[this.versionField];
        console.log('>>>', this.label.padStart(15,' '), '>', 'PARSE HASH: ID', this.id, 'VERSION', this.version);
    }

    setHash(id, version) {
        console.log('>>>', this.label.padStart(15,' '), '>', 'SET HASH', id, version);
        history.pushState(null,null,`#${id}/${version}`);
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