import crypto from 'crypto';

export default class {
    constructor() {
        return new Promise((resolve, reject) => {
            this.label = 'DATASOURCE';
            this.secret = 'simsalabim';
            this.storage_prefix = 'gamepad_';
            this.storage = localStorage;
            this.cache_age = 60 * 60; // seconds * minutes = (one) hour(s)

            console.log(this.label, '>>> READY!');
            return resolve(this);
        });
    };

    getStorageJson(field) {
        if (this.storage[`${this.storage_prefix}${field}`]) {
            try {
                return JSON.parse(this.storage[`${this.storage_prefix}${field}`]);
            } catch (e) {
            }
            return [];
        }
    };

    setStorageJson(field, data, hash) {
        if (!field || !data)
            return false;

        try {
            this.storage[`${this.storage_prefix}${field}_date`] = parseInt(Date.now() / 1000);
            this.storage[`${this.storage_prefix}${field}_hash`] = hash;
            this.storage[`${this.storage_prefix}${field}`] = JSON.stringify(data);
        } catch (e) {
            console.log('>>> ERROR', e);
        }
    };

};