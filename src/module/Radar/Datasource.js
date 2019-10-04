import crypto from 'crypto';
import Module from "../../Module";

export default class extends Module {
    constructor() {
        super();

        return new Promise((resolve, reject) => {
            this.label = 'DATASOURCE';
            console.log(this.label, 'INIT');

            this.secret = 'erdbeerkuchen';
            this.storage_prefix = 'techradar_';
            this.storage = localStorage;
            this.cache_age = 0; //60 * 60; // seconds * minutes = (one) hour(s)

            this.baseUrl = `${document.location.origin}${document.location.pathname}`;
            this.dataIndexUrl = `${this.baseUrl}data/index.json`;
            this.configUrl = false;
            this.dataSet = false;
            this.dataVersion = false;

            this.config = false;
            this.data = false;

            this
                .getDataIndex()
                .then(dataIndex => {
                    this.dataIndex = dataIndex;
                    this.dataSet = this.dataIndex.filter(i => i.default)[0];
                    return this.getConfig();
                })
                .then(config => {
                    this.config = config;
                    this.dataVersion = this.dataSet.version;
                    return this.getData();
                })
                .then(data => {
                    this.data = data;
                    this.emit('ready');
                });

            this.on('ready', () => {
                resolve(this);
            });
        });
    };

    getDataIndex() {
        return this.fetch(this.dataIndexUrl)
            .then(data => {
                return data;
            });
    };

    getConfig() {
        this.configUrl = `${this.baseUrl}data/${this.dataSet.id}/config.json`;
        return this.fetch(this.configUrl)
            .then(data => {
                return data;
            });
    };

    getData() {
        this.dataUrl = `${this.baseUrl}data/${this.dataSet.id}/${this.dataVersion}.json`;
        return this.fetch(this.dataUrl)
            .then(data => {
                return data;
            });
    };

    fetch(url) {
        if (!url)
            return false;

        const now = parseInt(Date.now() / 1000);
        const hash = crypto
            .createHmac('sha256', this.secret)
            .update(url)
            .digest('hex');

        if (parseInt(this.getStorageJson('posts_date')) > now - this.cache_age) {
            this.data = this.getStorageJson('posts');
            return Promise.resolve(this.data);
        }

        /**
         * continue here
         */

        const requestOptions = {
            method: 'GET'
        };
        return fetch(url, requestOptions)
            .then(response => {
                if (!response.ok)
                    return Promise.reject(response.statusText);

                return response.json();
            })
            .then(data => {
                if (data) {
                    this.data = data;
                    this.setStorageJson('posts', data, hash);
                }
                return data;
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