const
    ramda = require('ramda'),
    path = require('path');

module.exports = class {
    constructor() {
        this.appPath = path.resolve(process.cwd());
        this.defaults = {};
    }

    mergeConfig() {
        return ramda.mergeDeepLeft(this.config, this.defaults);
    }
};
