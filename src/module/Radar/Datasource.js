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

            const radarOptions = window.RADAROPTIONS;

            this.serverMode = this.radar.serverMode;
            this.protocol = radarOptions.protocol || 'http';
            this.host = radarOptions.host || 'localhost';
            this.port = radarOptions.port || 8200;
            this.apiVersion = radarOptions.apiVersion || 'v1';

            //
            if (this.serverMode === true) {
                this.baseUrl = `${this.protocol}://${this.host}`;
                if (this.port)
                    this.baseUrl += `:${this.port}`;

                this.baseUrl += `/${this.apiVersion}`;
                this.radarIndexUrl = `${this.baseUrl}/radar`;
            } else {
                this.baseUrl = `${document.location.origin}`;
                if (document.location.pathname !== '/')
                    this.baseUrl += `${document.location.pathname}`;

                this.radarIndexUrl = `${this.baseUrl}/radar/index.json`;
            }

            this.radarIndex = false;     // the index of all ids
            this.defaultRadar = false;
            this.selectedRadar = false;
            this.radarVersion = false;
            this.data = false;          // the dots data

            this
                .getDataIndex()
                .then(radarIndex => {
                    this.radarIndex = radarIndex;

                    // order the versions
                    this.radarIndex.map(r => r.versions = r.versions.sort().reverse());

                    // set the radar by the default index
                    this.defaultRadar = this.radarIndex.filter(i => i.is_default)[0];
                    this.selectedRadar = this.defaultRadar;
                    this.cache_age = (this.selectedRadar.cache_age || 0) * 60 * 60; // seconds * minutes = (one) hour(s)
                    this.emit('ready');
                });

            this.on('ready', () => {
                resolve(this);
            });
        });
    }

    oneRadar(id) {
        console.log('>>>', this.label.padStart(15, ' '), '>', 'ONE DATA SET', id, this.radarIndex);
        return this.radarIndex.filter(i => i.id === id)[0];
    }

    selectRadar(id, version) {
        if (!this.hasId(id)) {
            id = this.defaultRadar.id;
        }
        this.selectedRadar = this.oneRadar(id);

        // chose the default version
        if (!version && this.hasVersion(this.selectedRadar, this.selectedRadar.version)) {
            version = this.selectedRadar.version;
        }

        if (version && !this.hasVersion(this.selectedRadar, version)) {
            version = this.selectedRadar.versions.sort().reverse()[0];
        }
        console.log('>>>', this.label.padStart(15, ' '), '>', 'SELECT RADAR', id, version, this.selectedRadar.label);

        if (!this.selectedRadar)
            return false;

        document.querySelector('body').classList.add('loading');

        return new Promise((resolve, reject) => {
            //this.radarVersion = version;
            this.getConfig()
                .then(config => {
                    this.selectedRadar = config;
                    this.radarVersion = version;
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
                    resolve(this.selectedRadar, this.radarVersion);
                });
        });
    }

    getConfig(id) {
        if (!id)
            id = this.selectedRadar.id;

        if (this.serverMode === true) {
            this.configUrl = `${this.baseUrl}/radar/${id}`;
        } else {
            this.configUrl = `${this.baseUrl}/radar/${id}/config.json`;
        }

        return this.fetch(this.configUrl)
            .then(data => {
                return data;
            });
    }

    getDataIndex() {
        return this.fetch(this.radarIndexUrl)
            .then(data => {
                return data;
            });
    }

    updateDataIndex(){
        this
            .getDataIndex()
            .then(radarIndex => {
                this.radarIndex = radarIndex;
                return Promise.resolve();
            });
    }

    getData(id, version) {

        if (!id)
            id = this.selectedRadar.id;

        if (!version)
            version = this.radarVersion;

        if (this.serverMode === true) {
            this.dataUrl = `${this.baseUrl}/radar/${id}/dataset/${version}`;
        } else {
            this.dataUrl = `${this.baseUrl}/radar/${id}/dataset/${version}.json`;
        }
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
        console.log('>>>', this.label.padStart(15, ' '), '>', 'HAS ID', id);
        return this.radarIndex.filter(i => i.id === id)[0];
    }

    hasVersion(selectedRadar, version) {
        console.log('>>>', this.label.padStart(15, ' '), '>', 'HAS VERSION', selectedRadar.label, selectedRadar.versions, version);
        return selectedRadar.versions.includes(version);
    }

    getStorageJson(field) {
        if (this.storage[`${this.storage_prefix}${field}`]) {
            try {
                return JSON.parse(this.storage[`${this.storage_prefix}${field}`]);
            } catch (e) {
                console.log('>>>', this.label.padStart(15, ' '), '>', 'ERROR', e);
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
            console.log('>>>', this.label.padStart(15, ' '), '>', 'ERROR', e);
        }
    }
}