import crypto from 'crypto';
import Module from "../../Module";

export default class extends Module {
    constructor(args) {
        super();

        return new Promise((resolve, reject) => {
            this.label = 'DATASOURCE';
            this.radar = args;
            this.saltnpepper = 'push-it';
            this.storage_prefix = 'techradar_';
            this.storage = localStorage;
            this.cache_age = 0;

            this.baseUrl = `${document.location.origin}${document.location.pathname}`;
            this.dataIndexUrl = `${this.baseUrl}data/index.json`;
            this.configUrl = false;

            this.defaultData = false;
            this.dataIndex = false;     // the index of all ids
            this.dataSet = false;       // the selected dataset
            this.dataVersion = false;   // the selected version
            this.data = false;          // the dots data
            this.config = false;

            this
                .getDataIndex()
                .then(dataIndex => {
                    this.dataIndex = dataIndex;
                    this.cache_age = (this.dataSet.cache_age || 0) * 60 * 60; // seconds * minutes = (one) hour(s)

                    // set the dataset by the default index
                    this.defaultData = this.dataIndex.filter(i => i.default)[0];
                    this.dataSet = this.defaultData;
                    this.emit('ready');
                });

            this.on('ready', () => {
                resolve(this);
            });
        });
    }

    oneDataSet(id){
        console.log('>>>', this.label.padStart(15,' '), '>', 'ONE DATA SET', id);
        return this.dataIndex.filter(i => i.id === id)[0];
    }

    selectDataSet(id, version) {
        if (!this.hasId(id)) {
            id = this.defaultData.id;
        }
        this.dataSet = this.oneDataSet(id);
        if (!this.hasVersion(this.dataSet, version)) {
            version = this.dataSet.versions[0];
        }
        console.log('>>>', this.label.padStart(15,' '), '>', 'SELECT DATASET', id, version, this.dataSet);

        if (!this.dataSet)
            return false;

        document.querySelector('body').classList.add('loading');

        return new Promise((resolve, reject) => {
            this.getConfig()
                .then(config => {
                    this.config = config;
                    this.dataVersion = version;
                    return this.getData();
                })
                .then(data => {
                    this.data = data.map((dot, index) => {
                        return {
                            index: index,
                            ...dot
                        }
                    });
                    document.querySelector('body').classList.remove('loading');
                    resolve(this.dataSet, this.dataVersion);
                });
        });
    }

    getDataIndex() {
        return this.fetch(this.dataIndexUrl)
            .then(data => {
                return data;
            });
    }

    getConfig(id) {
        if (!id)
            id = this.dataSet.id;

        this.configUrl = `${this.baseUrl}data/${id}/config.json`;
        return this.fetch(this.configUrl)
            .then(data => {
                return data;
            });
    }

    getData(id, version) {
        if (!id)
            id = this.dataSet.id;

        if (!version)
            version = this.dataVersion;

        this.dataUrl = `${this.baseUrl}data/${id}/${version}.json`;
        return this.fetch(this.dataUrl)
            .then(data => {
                return data;
            });
    }

    fetch(url) {
        if (!url)
            return false;

        const now = parseInt(Date.now() / 1000);
        const hash = crypto
            .createHmac('sha256', this.saltnpepper)
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
    }

    hasId(id) {
        console.log('>>>', this.label.padStart(15,' '), '>', 'HAS ID', id);
        return this.dataIndex.filter(i => i.id === id)[0];
    }

    hasVersion(dataSet, version) {
        console.log('>>>', this.label.padStart(15,' '), '>', 'HAS VERSION', dataSet, version);
        return dataSet.versions.includes(version);
    }

    getStorageJson(field) {
        if (this.storage[`${this.storage_prefix}${field}`]) {
            try {
                return JSON.parse(this.storage[`${this.storage_prefix}${field}`]);
            } catch (e) {
                console.log('>>>', this.label.padStart(15,' '), '>', 'ERROR', e);
            }
            return [];
        }
    }

    setStorageJson(field, data, hash) {
        if (!field || !data)
            return false;

        try {
            this.storage[`${this.storage_prefix}${field}_date`] = parseInt(Date.now() / 1000);
            this.storage[`${this.storage_prefix}${field}_hash`] = hash;
            this.storage[`${this.storage_prefix}${field}`] = JSON.stringify(data);
        } catch (e) {
            console.log('>>>', this.label.padStart(15,' '), '>', 'ERROR', e);
        }
    }
}